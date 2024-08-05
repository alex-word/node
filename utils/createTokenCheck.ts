// 引入 jsonwebtoken
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.SECRET_KEY || '75ZAAcVICvblfmTYnfXLYcXPASj0P3a8'
const createTokenCheck = {
  // 生成的token。并设置过期时间 
  getToken(jiamiData: { username: string, id: number }, expiresIn: number | string = 3) {
    return jwt.sign({
      data: jiamiData
    }, SECRET_KEY, { expiresIn: expiresIn })
  },
  // 检查token是否过期
  verify(token: string) {
    try {
      return jwt.verify(token, SECRET_KEY)
    } catch (error) {
      // 如果报错返回false.[因为token有可能过期，就会报错]
      console.log('error:', error)
      return false
    }
  }
}
// 暴露出去，其他地方调用就行
export default createTokenCheck
