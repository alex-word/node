// 枚举状态码 根据自己需要定义
enum Code {
  success = 200,
  denied=401,
  error=400
}

enum CodeMessage {
  success = '请求成功',
  denied = '请登录',
  error = '请求异常'
}

// 状态类型 只能是Code中所枚举的状态
type codeType = keyof typeof Code

export { Code, codeType, CodeMessage }
