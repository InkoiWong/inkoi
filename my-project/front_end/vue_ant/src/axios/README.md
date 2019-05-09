# axios 基于 promise 的 HTTP 库

## 一、基本配置

[request.js](./request.js)

- [ ] default 基本配置
  - [ ] baseURL
  - [ ] timeout
  - [ ] headers

> 对于 post 请求，请求时一般都要设置 headers 的 Content-Type，发送内容的格式一般会使用两种：application/json 和 application/x-www-form-urlencoded

- application/json 指发送 json 对象，但是要提前 stringify 一下。(建议使用这种)
- application/xxxx-form 指发送 ?a=b&c=d 格式，可以用 qs 的方法格式化一下，qs 在安装 axios 后会自动安装，只需要组件里 import 一下即可。

```es6
// application/json
const postData = JSON.stringify(params) // 转换成 json 对象

// application/xxxx-form
import Qs from 'qs'
const postData = Qs.stringify(params) // 过滤成 ?&= 格式
```

## 二、拦截器

[request.js](./request.js)

- [ ] request 拦截
  - [ ] 请求头传入 token
- [ ] response 拦截

## 三、封装

> 原生使用 axios.get 有些不方便，需要 axios.get(url, { params: paramsObj })

```es6 [](./request.js)
/**
 * 二次封装axios.get方法
 *
 * 使用方法从 axios.get(url, { params: paramsObj })
 * 修改为 axios.get(url, paramsObj)
 * 更方便使用
 */
service['get'] = (url, parameter) => {
  return service({
    url,
    method: 'get',
    params: parameter
  })
}
```

## 四、挂载到全局

```es6 [](./axios.js)
Object.defineProperties(Vue.prototype, {
  $axios: {
    get: function get() {
      return instance
    }
  }
})
```

```es6 [](./../main.js)
import { VueAxios } from './axios/request'
Vue.use(VueAxios)
```

## 五、全局使用

```js
// 二次封装的axios.get
this.$axios.get(api, parameter)
this.$axios.post(api, parameter)
```
