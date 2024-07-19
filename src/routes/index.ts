// src/routes/index.ts

import commonRes from '../../utils/commonRes'
import silentHandle from '../../utils/silentHandle'
import { Express, Request, Response, Router } from 'express'
import login from './login';
import register from './register';
import db from '../../database'

// 路由配置接口
interface RouterConf {
  path: string,
  router: Router,
  meta?: unknown
}

// 路由配置
const routerConf: Array<RouterConf> = [
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
]
const getInfo = function () {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err: any, results: unknown) => {
      console.log(err, '123123');
      if (err) reject(err)
      resolve(results)
    });
  })
}
function routes(app: Express) {
  // 根目录
  // app.get('/', async (req: Request, res: Response) => {
  //   const [e, result] = await silentHandle(getInfo)
  //   e ? commonRes.error(res, null) : commonRes(res, { result })
  // })
  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}

export default routes
