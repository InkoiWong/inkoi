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
      // 颜色
      color: this.VueProgressBarColor,
      // 加载失败颜色
      failedColor: 'red',
      // 厚度
      thickness: '2px',
      // 动画
      transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
      },
      // 自动还原
      autoRevert: true,
      // 进度条位置
      location: 'top',
      // 反转进度条的方向
      inverse: false,
      // 允许进度条在接近100％时自动完成
      autoFinish: false
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
