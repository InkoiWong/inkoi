<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <vue-progress-bar></vue-progress-bar>

      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { AppDeviceEnquire } from '@/utils/mixin'

export default {
  mixins: [AppDeviceEnquire],
  data () {
    return {
      locale: zhCN,
      VueProgressBarColor: null
    }
  },

  created () {
    this.VueProgressBarColor = this.$store.getters.color
    Vue.use(VueProgressBar, {
      color: this.VueProgressBarColor
    })
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
  },

  updated () {
    if (this.VueProgressBarColor !== this.$store.getters.color) {
      // 根据主题颜色替换 VueProgressBar 的颜色
      this.VueProgressBarColor = this.$store.getters.color
      this.$Progress.setColor(this.VueProgressBarColor)
    }
  }
}
</script>
<style>
#app {
  height: 100%;
}
</style>
