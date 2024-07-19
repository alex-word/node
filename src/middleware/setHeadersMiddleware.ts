import { Request, Response, NextFunction } from 'express';

export const setHeaders = (req: Request, res: Response, next: NextFunction) => {
    // 设置全局响应头
    res.setHeader('X-Powered-By', 'My App');
    res.setHeader('X-Custom-Header', 'CustomHeaderValue');
    res.setHeader('Access-Control-Allow-Origin', '*'); // 示例：允许所有域
    res.setHeader('Content-Security-Policy', "default-src 'self'"); // 示例：内容安全策略
    res.setHeader('Content-Type', 'application/json');
    next(); // 继续处理请求
};
