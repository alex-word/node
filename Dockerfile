# 使用官方 Node.js 镜像作为基础镜像
FROM node:20

# 全局安装 Yarn
RUN npm install -g yarn

# 设置工作目录
WORKDIR /usr/src/app

# 复制 package.json 和 yarn.lock（推荐）以更高效地缓存依赖安装步骤
COPY package.json yarn.lock ./

# 安装项目依赖
RUN yarn install

# 复制项目代码到容器
COPY . .

# 暴露应用端口
EXPOSE 8888

# 启动应用
CMD ["yarn", "dev"]
