#!/usr/bin/env bash

#关闭容器
docker-compose stop || true;

#删除容器
docker-compose down || true;

#构建镜像
docker-compose build;

#启动并后台运行
docker-compose up -d;

#查看日志
docker logs shop-egg;

#对空间进行清理
#docker system prune -a -f;