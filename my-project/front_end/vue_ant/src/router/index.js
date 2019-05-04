import Vue from 'vue'
import Router from 'vue-router'

// 路由地图
import { constantRouterMap } from './router-map'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可选值：hash、history // 去除地址栏的 #
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
