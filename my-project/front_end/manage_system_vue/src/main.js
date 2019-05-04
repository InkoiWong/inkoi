// ie polyfill
import '@babel/polyfill'

import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

// mount axios Vue.$http and this.$http
import { VueAxios } from './axios/request'
Vue.use(VueAxios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
