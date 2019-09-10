# Node

[官方文档](http://nodejs.cn/api/)

## node 认识

[参考文章](https://juejin.im/post/5ccacfb96fb9a03201243cb9)
[参考文章](https://www.runoob.com/nodejs/nodejs-tutorial.html)

## 基本模块

> 不需 require 引入，可直接使用

1.  global 全局对象
2.  [process](./use/process.js) 环境变量-当前进程
3.  console

## 内置模块

1.  常用

    1.  http 处理请求
        1.  服务器端
            1.  http.createServer 创建服务器
        2.  客户端
            1.  http.request 发起 http 请求
            2.  http.get 它是 http.request 的简化版，自动设置为 get 方法
    2.  url 处理客户端请求过来的 URL
        1.  url.parse 解析请求参数
    3.  [fs](./use/fs.js) 文件读写（如需要使用同步，方法名后添加 Sync）
        1.  fs.exists 异步检测给定的路径是否存在
        2.  fs.mkdir 异步创建目录
        3.  fs.rmdir 异步删除文件夹
        4.  fs.stat 异步读取文件状态
            1.  stats.isFile() 如果是文件返回 true，否则返回 false
            2.  stat.isDirectory() 如果是目录返回 true，否则返回 false
        5.  fs.unlink 异步删除文件
        6.  fs.open 异步打开文件
        7.  fs.rename 异步移动文件/重命名
        8.  fs.readFile 异步读取文件内容
        9.  fs.copyFile 异步复制文件
        10. fs.appendFile 异步追加数据/创建文件
        11. fs.writeFile 异步创建文件/覆盖文件
    4.  [path](./use/path.js) 处理文件路径
        1.  path.basename 文件名.扩展名
        2.  path.dirname 所在目录名
        3.  path.extname .拓展名
        4.  path.parse 将路径转换成 js 对象
        5.  path.format 将 js 对象转换成路径
        6.  path.join 合并路径
        7.  path.relative 从第一个文件读取第二个文件的相对位置
        8.  path.resolve 将相对路径转为绝对路径

2.  其它

    1.  querystring 处理客户端通过 get/post 请求传递过来的参数
    2.  crypto 加密和哈希
    3.  util 工具函数
    4.  events 事件驱动程序
    5.  os 提供基本的系统操作函数
    6.  net 提供了处理和转换文件路径的工具
    7.  dns 用于解析域名
    8.  domain 简化异步代码的异常处理，可以捕捉处理 try catch 无法捕捉的。
