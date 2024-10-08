// utils/commonRes.ts
// 按自己需要删改

import { Response } from 'express'
import { Code, codeType, CodeMessage } from '../constants/code'
import logger from './logger'

interface ResOption {
  type?: codeType
  status?: number
  message?: unknown
  code?: number
}

// 默认成功响应
function commonRes(res: Response, data: unknown, options?: ResOption) {
  options = Object.assign({ type: Code[200] }, options || {}) // 默认success

  const { type, status, message, code } = options
  let resStatus = status

  if (resStatus === undefined) {
    // 根据状态设置状态码
    resStatus = type === Code[200] ? 200 : 400
  }

  // 响应参数
  const sendRes: { code: number; data: unknown; message?: unknown } = {
    code: Code[type as codeType],
    data,
  }

  // 响应描述
  message && (sendRes.message = message)

  return res.status(resStatus).send(sendRes)
}

// 错误响应
commonRes.error = function (
  res: Response,
  data: unknown,
  message?: { message: string } | string
) {
  logger.error(message || CodeMessage['error'])
  this(res, data, {
    type: 'error',
    message:
      (message as { message: string })?.message ||
      message ||
      CodeMessage['error'],
    status: 200,
  })
}

// 无权限响应
commonRes.denied = function (res: Response, data: unknown, message?: string) {
  this(res, data, {
    type: 'denied',
    message: message || CodeMessage['denied'],
    status: 200,
  })
}

export default commonRes
