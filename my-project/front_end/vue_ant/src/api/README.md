# API 接口管理

> 接口请求 与 接口数据 分离，可以将所有接口集中起来，方便统一管理。
> 请求只管用户动作，数据只管业务处理，符合 mvvm 原则。

## 一、接口 转换成 请求

```es6
const api = {
  Login: 'auth/login',
  Logout: '/auth/logout'
}

export function login(parameter) {
  return axios.post(api.Login, parameter)
}
export function logout() {
  return axios.post(api.Logout)
}
```

## 二、api-map

- 权限 [auth](./auth.js)
- 用户 [user](./user.js)
- 账号 [account](./account.js)
