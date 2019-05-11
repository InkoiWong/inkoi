// ie polyfill
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
// 路由管理器
import router from './router'
// 状态管理器
import store from './store/'
// Http库
import { VueAxios } from './axios/request'

// mock
import './mock'

import './core/use'
import './permission' // permission control
import './utils/filter' // global filter
// 初始化 App 配置
import Initializer from './core/initializer'

Vue.config.productionTip = false

// mount axios Vue.$axios and this.$axios
Vue.use(VueAxios)

new Vue({
  router,
  store,
  created () {
    Initializer()
  },
  render: h => h(App)
}).$mount('#app')
