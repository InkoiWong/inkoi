import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// state 数据库
import state from './state'

// getters 取出状态API
// 从数据库里取数据的 API
// 既然是取，那么你肯定不能把数据库给改了吧？所以 getters 得是一个"纯函数"，就是不会对原数据造成影响的函数
// 比如数组的concat（）方法、slice（）方法；与之对应的是数组的push（）方法、splice（）方法，他们会改变原数组的值
import getters from './getters'

// mutations 修改状态API
// 数据存入数据库的 API，用来修改 state 的
import mutations from './mutations'
import types from './mutation-types'

// actions 异步提交 mutation 的API
// 拿到了数据，总要做个处理吧，处理完了再存到数据库中。其实这就是action的过程
// 当然也可以不做处理，直接丢到数据库，所以vuex也可以在 action 中直接存，就是直接 mutation
import actions from './actions'

// 总结
// state 管数据库
// getters 只管取，不改
// mutations 只管存，如果 actions 给我 dispatch 我就存
// actions 只管中间处理，处理完我就 dispatch 交给 mutations，你怎么存我不管
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// registerModule 动态注册模块
// Vux-页面切换显示loading
store.registerModule('vux', { // 名字自己定义
  state: {
    isLoading: false
  },
  mutations: {
    [types.UPDATE_LOADING_STATUS] (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

export default store
