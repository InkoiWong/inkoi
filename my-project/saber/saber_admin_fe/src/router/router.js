import Vue from 'vue'
import Router from 'vue-router'

// 路由地图
import constantRouterMap from './router-map/constant-router'

Vue.use(Router)

const router = new Router({
  mode: 'history', // 可选值：hash、history
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export default router
