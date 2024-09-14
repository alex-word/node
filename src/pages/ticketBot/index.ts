import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
import RecaptchaPlugin from 'puppeteer-extra-plugin-recaptcha'
import { Request, Response } from 'express'
import commonRes from '../../../utils/commonRes'
import silentHandle from '../../../utils/silentHandle'

// 使用 Stealth 和 Recaptcha 插件
puppeteer.use(StealthPlugin())
puppeteer.use(
  RecaptchaPlugin({
    provider: { id: '2captcha', token: 'YOUR_2CAPTCHA_API_KEY' }, // 使用你的 2Captcha API Key
    visualFeedback: true,
  })
)

let botStatus = {
  running: false,
  lastRun: null,
  success: false,
  message: '',
}

const TICKET_URL = 'https://m.damai.cn/damai/home/index.html'
const LOGIN_URL =
  'https://m.damai.cn/damai/minilogin/index.html?returnUrl=https%3A%2F%2Fm.damai.cn%2Fshows%2Fmine.html%3Fspm%3Da2o71.home.top.duserinfo&spm=a2o71.mydamai.0.0'
const USERNAME = 'xxxxx'
const PASSWORD = 'xxxxx'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

async function initializeBrowser() {
  return puppeteer.launch({
    headless: false,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    defaultViewport: null,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })
}

async function TicketBot(req: Request, res: Response) {
  try {
    const browser = await initializeBrowser()
    const page = await browser.newPage()

    await page.goto(TICKET_URL, { waitUntil: 'networkidle2' })
    await page.waitForSelector('i.icon-wode_')
    await page.click('i.icon-wode_')
    await page.waitForNavigation({ waitUntil: 'networkidle2' })

    const frameHandle = await page.waitForSelector('iframe')
    const frame = await frameHandle?.contentFrame()

    if (frame) {
      await frame.waitForSelector('a.password-login-link')
      await frame.click('a.password-login-link')
      await frame.waitForSelector('#fm-login-id')
      await frame.type('#fm-login-id', USERNAME, { delay: 100 })
      await frame.type('#fm-login-password', PASSWORD, { delay: 100 })
      await frame.click('button.fm-submit')

      await delay(3000)
      await page.waitForNavigation({ waitUntil: 'networkidle2' })

      await page.goto(TICKET_URL, { waitUntil: 'networkidle2' })
      console.log('进入首页')
      //   await page.close()
      res.json({ message: '抢票任务完成！' })
    }
  } catch (error) {
    console.error('抢票任务失败：', error)
    res.status(500).json({ message: '抢票任务失败，请检查日志。' })
  }
}

export const handleTicketBot = async (req: Request, res: Response) => {
  const [e, data] = await silentHandle(TicketBot, req)
  e ? commonRes.error(res, null, e) : commonRes(res, { data })
}

const getTicketMessage = (req: Request, res: Response) => {
  botStatus.success
    ? commonRes(res, botStatus)
    : commonRes.error(res, null, botStatus)
}
