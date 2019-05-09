// ie polyfill
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'
// 路由管理器
import router from './router'
import store from './store/'
import { VueAxios } from './axios/request'

// mock
import './mock'

import bootstrap from './core/bootstrap'
import './core/use'
import './permission' // permission control
import './utils/filter' // global filter

Vue.config.productionTip = false

// mount axios Vue.$axios and this.$axios
Vue.use(VueAxios)

new Vue({
  router,
  store,
  created () {
    bootstrap()
  },
  render: h => h(App)
}).$mount('#app')
