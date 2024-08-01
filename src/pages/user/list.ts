import { Request, Response } from 'express'
import db from '../../../database'
import commonRes from '../../../utils/commonRes'
import silentHandle from '../../../utils/silentHandle'

const getInfo = function () {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM users'
    db.query(sql)
      .then((res) => {
        const arr=(res[0]) as Array<{
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
            created_at: item.created_at,
          }))
        )
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export const handleGetUserList = async (req: Request, res: Response) => {
  const [e, data] = await silentHandle(getInfo)
  e ? commonRes.error(res, null, e) : commonRes(res, { data })
}
