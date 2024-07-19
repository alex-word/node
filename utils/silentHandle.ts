// 如果执行过程有错误，则捕捉并赋值给返回数组的第一个元素
async function silentHandle<T, U = Error>(fn: Function, ...args: Array<unknown>): Promise<[U, null] | [null, T]> {
    let data: [U, null] | [null, T]
    try {
      data = [null, await fn(...args)]
    } catch (e: any) {
      data = [e, null]
    }
  
    return data
  }
  
  export default silentHandle
  
  