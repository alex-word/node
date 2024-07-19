import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import db from '../../database'
import { FieldPacket, QueryResult } from 'mysql2'
import commonRes from '../../utils/commonRes'
import dayjs from 'dayjs'

const SECRET_KEY = process.env.SECRET_KEY || '75ZAAcVICvblfmTYnfXLYcXPASj0P3a8'
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body
  if (!username || !password) {
    commonRes.error(res, null, 'Username and password are required')
  }
  try {
    const [rows, fields]: [QueryResult, FieldPacket[]] = await db.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    )

    if ((rows as any[]).length === 0) {
      commonRes.error(res, null, 'Invalid username or password')
    }
    const user = (rows as any[])[0]
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      commonRes.error(res, null, 'Invalid username or password')
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      SECRET_KEY,
      { expiresIn: '8h' }
    )

    // res.json({ token });
    commonRes(res, { token })
  } catch (error: any) {
    commonRes.error(res, null, error, 500)
  }
}

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'Username and password are required' })
  }

  try {
    // 哈希密码
    const hashedPassword = await bcrypt.hash(password, 10)
    const [rows]=   await db.query(
      'SELECT * FROM users WHERE username = ?',
      [username]
    )
    if((rows as any[])?.length>0){
      commonRes.error(res, null, '不可以重复注册', 500)
      return
    }
    // 存储用户信息
    await db.query(
      'INSERT INTO users (username, password, created_at) VALUES (?, ? , ?)',
      [username, hashedPassword, dayjs().format()]
    )

    res.status(200).json({ message: 'User registered successfully' })
  } catch (error: any) {
    commonRes.error(res, null, error, 500)
  }
}
