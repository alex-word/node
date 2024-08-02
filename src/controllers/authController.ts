import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import db from '../../database'
import { FieldPacket, QueryResult } from 'mysql2'
import commonRes from '../../utils/commonRes'
import dayjs from 'dayjs'
import silentHandle from '../../utils/silentHandle'

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
      { expiresIn: 6000 }
    )

    // res.json({ token });

    commonRes(res, { token })
  } catch (error: any) {
    commonRes.error(res, null, error)
  }
}

export const register = async (req: Request, res: Response) => {
  const { username, password, email, check_password } = req.body

  if (!username || !password) {
    return commonRes.error(res, null, '用户名和密码都是必填项')
  }
  if (check_password !== password) {
    return commonRes.error(res, null, '两次输入的密码不一致')
  }

  if (!email) {
    return commonRes.error(res, null, 'email是必填项')
  }
  try {
    // 哈希密码
    const hashedPassword = await bcrypt.hash(password, 10)
    const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [
      username,
    ])
    if ((rows as any[])?.length > 0) {
      return commonRes.error(res, null, '不可以重复注册')
    }
    // 存储用户信息
    await db.query(
      'INSERT INTO users (username, password, email,created_at) VALUES (?, ? , ? , ?)',
      [username, hashedPassword, email, dayjs().format()]
    )
    commonRes(res, { message: '注册成功' })
  } catch (error: any) {
    commonRes.error(res, null, error)
  }
}

export const updatePwd = async (req: Request, res: Response) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    return commonRes.error(res, null, '新旧密码为必填项');
  }

  try {
    // 查询用户的当前密码哈希
    const [rows] = await db.query('SELECT password FROM users WHERE id = ?', [(req as any).user.id]);

    if ((rows as any[]).length === 0) {
      return commonRes.error(res, null, '用户不存在');
    }

    const user = (rows as any[])[0];

    // 验证旧密码
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return commonRes.error(res, null, '旧密码错误');
    }

    // 哈希新密码
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // 更新密码
    await db.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, (req as any).user.id]);
    commonRes(res, { message: "密码修改成功" });
  } catch (error: any) {
    commonRes.error(res, null, error)
  }
}