import { Request, Response } from 'express'
import db from '../../../database'
import commonRes from '../../../utils/commonRes'
import silentHandle from '../../../utils/silentHandle'
import { HandleTime } from '../../../utils/handletime'

const getInfo = function (req: Request) {
  return new Promise((resolve, reject) => {
    const page = parseInt(req.query.page as any) || 1;
    const limit = parseInt(req.query.limit as any) || 10;
    const username = req.query.username || '';
    const offset = (page - 1) * limit;
    const sql = 'SELECT * FROM users WHERE username LIKE ? LIMIT ? OFFSET ?'
    db.query(sql, [`%${username}%`, limit, offset])
      .then((res) => {
        const arr = (res[0]) as Array<{
          id: number
          username: string
          email: string
          created_at: string
        }>
        resolve(
          arr?.map((item) => ({
            id: item.id,
            name: item.username,
            email: item.email,
            created_at: HandleTime(item.created_at),
            updated_at: HandleTime(item.created_at),
          }))
        )
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export const handleGetUserList = async (req: Request, res: Response) => {
  const [e, data] = await silentHandle(getInfo, req)
  e ? commonRes.error(res, null, e) : commonRes(res, { data })
}
