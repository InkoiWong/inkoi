# Mock

## 一、介绍

[官网](http://mockjs.com/)

> 使用 mockjs 可以事先模拟数据，前提是和后端约定好了数据接口，怎样的数据。使用 mock 就可以生成你要的数据了，从而实现开发时前后端分离。

- 其主要功能是：
  - 基于数据模板生成模拟数据。
  - 基于 HTML 模板生成模拟数据。
  - 拦截并模拟 ajax 请求。

## 二、规范

### 1、模拟数据

```es6
// 1. 直接生成模拟数据
Mock.mock(模板 | func)

// 2. 为接口地址模拟数据
Mock.mock(url, 模板 | func)

// 3. 为接口以及请求方式模拟数据
Mock.mock(url, type, 模板 | func)
```

### 2、模板语法

> 参考文章

> 语法：(https://www.cnblogs.com/moqiutao/p/7768968.html)
> 语法：(https://cloud.tencent.com/developer/article/1330971)
> 模拟随机值：(https://my.oschina.net/tongjh/blog/2999834)
> 增删查改：(https://blog.csdn.net/qq_42205731/article/details/81705350)

### 3、utils

- 公共方法 [](./util.js)
  - 获取 get 方法的参数 getQueryParameters
  - 获取 post 方法的参数 getBody
  - 统一生产响应体方法 builder

### 4、输出接口

```es6
Mock.mock(/\/auth\/login/, 'post', login)
```

## 三、使用

### 1、工程化汇总所有 service

> 汇总方法文档：(https://www.jianshu.com/p/c894ea00dfec)

- [index.bundle.js](./services/index.bundle.js)
- [输出](./index.js)

- [调用](./../main.js)

## 四、mock-map

- 权限 [auth](./services/auth.js)
- 用户 [user](./services/user.js)
- 账号 [account](./services/account.js)
