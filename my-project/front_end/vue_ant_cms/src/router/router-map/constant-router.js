// import {
//   UserLayout // 用户登录注册相关页面布局
// } from '@/layouts'

/**
 * 基础路由
 * @type { *[] }
 */
const constantRouterMap = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import(/* webpackChunkName: "home" */ './../../views/Home.vue')
  }
]

export default constantRouterMap
