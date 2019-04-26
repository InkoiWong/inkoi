## 一、安装 node 环境

node 10.15.3
npm 6.4.1

```
node -v
npm -v
```

## 二、npm 配置镜像站（提升速度，推荐使用淘宝源）

```
npm config set registry=http://registry.npm.taobao.org
```

## 三、vue-cli2 安装

```
npm install vue-cli -g
```

## 四、从零开始创建项目

> 1 创建命令

```
vue init webpack '项目名称'
```

> 2 选择配置

- 自己看着选

> 3 下载安装并创建项目

- [新创建的项目](./new-project/src/App.vue)

> 4 文件夹结构及解析

- [vue2 项目文件结构及解析.zh-CN.md](./vue2项目文件结构及解析.zh-CN.md)

> 5 启动项目本地开发

```
cd new-project
npm run dev
```

- [本地调试地址](http://localhost:8080)

> 6 打包上线

```
npm run build
```

- [项目生产环境](./new-project/dist/index.html)
