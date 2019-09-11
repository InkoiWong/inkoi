import service from './interceptors'
import { get, post } from './encapsulation'

const installer = {
  vm: {},
  // eslint-disable-next-line
  install(Vue) {
    // 封装并发布到全局
    Vue.prototype.$axios = service
    Vue.prototype.$post = post
    Vue.prototype.$get = get
  }
}

export { installer as VueAxios, service as axios }
