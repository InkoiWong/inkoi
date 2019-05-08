# axios 基于 promise 的 HTTP 库

## 一、封装

[axios.js](./axios.js)

- [ ] get
- [ ] post

## 二、基本配置

[request.js](./request.js)

- [ ] default 基本配置
  - [ ] baseURL
  - [ ] timeout
  - [ ] headers

## 三、拦截器

[request.js](./request.js)

- [ ] request 拦截
  - [ ] 请求头传入 token
- [ ] response 拦截

## 四、发布到全局

```es6 [](./../main.js)
import { VueAxios } from './axios/request'
Vue.use(VueAxios)
```

```js
this.axios.get(api, params)
this.axios.post(api, params)
```
