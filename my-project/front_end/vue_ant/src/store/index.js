import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

// modules
import modulesBundle from './modules/index.bundle'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters,
  mutations: {},
  actions: {},

  modules: modulesBundle
})
