<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <vue-progress-bar></vue-progress-bar>

      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { AppDeviceEnquire } from '@/utils/mixin'

export default {
  mixins: [AppDeviceEnquire],
  data () {
    return {
      locale: zhCN
    }
  },

  created () {
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })

    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  }
}
</script>
<style>
#app {
  height: 100%;
}
</style>
