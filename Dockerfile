#镜像版本
FROM node:14.18.2
#创建工作目录
RUN mkdir -p /usr/src/node-app/egg-shop
#设置工作目录
WORKDIR /usr/src/node-app/egg-shop
#拷贝package.json，因为docker镜像是一层层构建的，仅仅当这一层变化时，才会重新构建变化的层
#package.json单独一层，防止每次源码修改，都要重新 npm install模块
COPY package.json /usr/src/node-app/egg-shop/package.json

#安装依赖
RUN npm install --registry=https://registry.npm.taobao.org

#拷贝所有源码到工作目录
COPY . /usr/src/node-app/egg-shop

#暴露端口 
EXPOSE 7001

#启动 egg 应用
CMD npm start
