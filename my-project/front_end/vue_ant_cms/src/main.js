import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueAxios } from './axios'
import './mock'

import './core'

Vue.use(VueAxios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    // this.$get('user/info').then(res => {
    //   console.log('res', res)
    // })
  },
  render: h => h(App)
}).$mount('#app')
