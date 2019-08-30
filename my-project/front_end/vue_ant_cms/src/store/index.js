import Vue from 'vue'
import Vuex from 'vuex'

// modules
// import modulesBundle from './modules/index.bundle'

// 数据持久化插件
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  // modules: modulesBundle,

  plugins: [persistedState()]
})
