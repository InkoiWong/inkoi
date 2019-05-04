import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerMap } from './router-map'
Vue.use(VueRouter)

export default new VueRouter({
  routes: routerMap
})
