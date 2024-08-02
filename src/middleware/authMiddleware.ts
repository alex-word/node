import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import commonRes from '../../utils/commonRes'

const SECRET_KEY = process.env.SECRET_KEY || '75ZAAcVICvblfmTYnfXLYcXPASj0P3a8'

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token as string

  if (req.originalUrl === '/login' || req.originalUrl === '/register') {
    return next()
  } else {
    if (token == null) {

      return commonRes.denied(res, null) // 如果没有token，返回401 
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
      console.log(user);
      if (err) {
        return commonRes.denied(res, null) // 如果token无效或过期，返回401 
      }

      (req as any).user = user
      next() // 如果token有效，继续处理请求
    })
  }
}
