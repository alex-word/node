import express from 'express'
import routes from './routes' // 路由
import logger from '../utils/logger'
import initMiddleware from '../middleware'
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';
import responseHeader from '../middleware/responseHeader';
dotenv.config();
const app = express()
// 挂载中间件
initMiddleware(app)

app.use(express.json())
app.use(responseHeader);
app.use((req: Request, res: Response, next: NextFunction) => {
  // 设置默认 Content-Type 响应头
  res.setHeader('Content-Type', 'application/json');
  next(); // 继续处理请求
});
const PORT = process.env.PORT

// 启动
app.listen(PORT, async () => {
  // logger.info(`App is running at http://localhost:${PORT}`)
  routes(app)
})

process.on('uncaughtException', function (err) {
  console.log('Caught Exception:' + err);//直接捕获method()未定义函数，Node进程未被退出。
});

