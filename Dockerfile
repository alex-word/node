# 使用官方 Node.js 镜像作为基础镜像
FROM node:20

RUN npm install yarn -g
# 创建并设置工作目录
WORKDIR /usr/src/app

# 复制项目的 package.json 和 package-lock.json
COPY package*.json ./

# 安装项目依赖
RUN yarn

# 复制项目代码
COPY . .

# 暴露应用端口
EXPOSE 8888

# 启动应用
CMD ["node", "app.js"]