const VueAxios = {
  vm: {},
  // eslint-disable-next-line no-unused-vars
  install (Vue, instance) {
    if (this.installed) {
      return
    }
    this.installed = true

    if (!instance) {
      // eslint-disable-next-line no-console
      console.error('You have to install axios')
      return
    }

    Vue.axios = instance

    // 封装并发布到全局
    Object.defineProperties(Vue.prototype, {
      $axios: {
        get: function get () {
          return instance
        }
      }
    })
  }
}

export { VueAxios }
