/**
 * mutations
 *
 * @summary   修改状态API
 * @desc
 * 修改存入数据库状态的 API，用来修改 state 的
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 * Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
 *
 * Vue 建议我们 mutation 类型用大写常量表示
 *
 * 既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新
 * 这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：
 * 最好提前在你的 store 中初始化好所有所需属性。
 * 当需要在对象上添加新属性时，你应该使用
 * Vue.set(obj, 'newProp', 123),
 * 或者以新对象替换老对象
 * state.obj = { ...state.obj, newProp: 123 }
 *
 */

// Example
// -----------------------------------------------------------------------------
import types from './mutation-types'

// 使用常量替代 Mutation 事件类型
// 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
export default {
  // 1.接受 state 作为第一个参数
  [types.PLUS_ONE] (state) {
    // 变更状态
    state.count++
  },
  [types.MINUS_ONE] (state) {
    // 变更状态
    state.count--
  },
  // 使用方法 $store.commit('PLUS_ONE')
  // 使用方法 $store.commit('MINUS_ONE')

  // 2.提交载荷（Payload）
  // Mutation 除了接收 state 作为第一个参数外，还可以接收其他的参数
  // Payload 可传入一个值，或者一个对象
  // 在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读
  [types.PLUS] (state, plusNum) {
    state.count += plusNum
  },
  [types.MINUS] (state, payload) {
    state.count -= payload.minusNum
  }
  // 使用方法 $store.commit('PLUS', 10)
  // 使用方法
  // 写法一：载荷方式
  // $store.commit('MINUS', {minusNum: 10})
  // 写法二：对象方式
  // $store.commit({type: 'MINUS', minusNum: 10})
}

// 2.使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）
// 详情请参照vuex-demo
// -----------------------------------------------------------------------------
