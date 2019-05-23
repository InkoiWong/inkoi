## 检查 没被收录的 tutorial

[TOC]

[check-records.js](./check-records.js)

```
node check-records.js
```

## node 内置模块

> 不需要额外安装的包，可以直接使用

- 文件处理

  - [fs](./tutorial/fs.js) 文件系统
  - [path](./tutorial/path.js) 处理文件路径的工具

## 第三方 npm 常用包使用方法

- 文件处理

  - [glob](./tutorial/glob.js) 获取匹配格式的文件的路径
  - [mkdirp](./tutorial/mkdirp.js) 创建功能
  - [rimraf](./tutorial/rimraf.js) 删除功能

- 终端控制台

  - [chalk](./tutorial/chalk.js) 打印信息字体效果
  - [colors](./tutorial/colors.js) 打印信息字体效果
  - [ora](./tutorial/ora.js) loading 效果

- npm 包版本号

  - [semver](./tutorial/semver.js) 处理 npm 包的语义版本

- linux 命令

  - [shelljs](./tutorial/shelljs.js) node 环境使用 linux 命令

- 本地环境端口

  - [portfinder](./tutorial/portfinder.js) 查看本地空闲端口
