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
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  }
]

export default constantRouterMap
