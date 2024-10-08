// src/routes/index.ts

import commonRes from '../../utils/commonRes'
import silentHandle from '../../utils/silentHandle'
import { Express, Request, Response, Router } from 'express'
import login from './user/login';
import register from './user/register';
import db from '../../database'
import list from './user/list';
import update_pwd from './user/update-pwd';
import hot_search from './hotSearch';
import ticketBot from './ticketBot';

// 路由配置接口
interface RouterConf {
  path: string,
  router: Router,
  meta?: unknown
}

// 路由配置
export const routerConf: Array<RouterConf> = [
  {
    path: '/',
    router: login,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    router: register,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    router: list,
    meta: { requiresAuth: false }
  },
  {
    path: '/',
    router: update_pwd,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    router: hot_search,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    router: ticketBot,
    meta: { requiresAuth: true }
  },
]
const getInfo = function () {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users';
    db.query(sql).then(res => {
      resolve(res[0])
    }).catch(err => {
      reject(err)
    })
  })
}
function routes(app: Express) {
  // 根目录

  // app.get('/user', async (req: Request, res: Response) => {
  //   const [e, data] = await silentHandle(getInfo)
  //   e ? commonRes.error(res, null,e) : commonRes(res, { data })
  // })
  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
