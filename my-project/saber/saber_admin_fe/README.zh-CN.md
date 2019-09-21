# saber_admin_fe

## 项目创建

```
vue create saber_admin_fe
或
winpty vue.cmd create saber_admin_fe
```

## 路由管理器 vue-router

1.  router [基本参数](src\router\router.js)
2.  router-map 路由地图
    1.  constantRouterMap [基础路由](src\router\router-map\constant-router.js)
    2.  asyncRouterMap [动态路由](src\router\router-map\async-router.js)
3.  hooks [路由拦截器](src\router\hooks.js)

## 状态管理器 vuex

1.  store [状态管理器](src\store\index.js)
2.  modules [模块分类](src\store\modules\index.bundle.js)
3.  vuex-persistedstate 数据持久化

## Http 库 Axios

1.  [全局默认配置](src\axios\default.config.js)
2.  [拦截器](src\axios\interceptors.js)
3.  [二次封装](src\axios\encapsulation.js)

## 前后端分离 mock

1.  [请求拦截](src\mock\index.js)

## 第三方库

1.  [ant-design](src\core\use\ant-design.js)
2.  [vue-ls](src\core\use\vue-ls.js)
3.  [vue-progressbar](src\utils\mixin\vue-progressbar.js)
