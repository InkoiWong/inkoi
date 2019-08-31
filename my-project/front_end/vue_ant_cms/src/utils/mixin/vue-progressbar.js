import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

const VueProgressBarSettings = {
  created () {
    // this.VueProgressBarColor = this.$store.getters.color
    this.VueProgressBarColor = '#EDBB79'
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
  }

  // updated () {
  //   if (this.VueProgressBarColor !== this.$store.getters.color) {
  //     // 根据主题颜色替换 VueProgressBar 的颜色
  //     this.VueProgressBarColor = this.$store.getters.color
  //     this.$Progress.setColor(this.VueProgressBarColor)
  //   }
  // }
}

export default VueProgressBarSettings
