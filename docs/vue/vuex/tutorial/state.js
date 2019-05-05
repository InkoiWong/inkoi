/**
 * state
 *
 * @summary   数据库
 * @desc      可以全局访问且修改的数据库
 *
 */

// Example
// -----------------------------------------------------------------------------
// 1.定义变量
const state = {
  count: 0,
  todos: [{ id: 1, text: 'text1', num: 1, done: true }, { id: 2, text: 'text2', num: 2, done: false }]
}
// 使用方法 $store.state.todos

// 2.mapState 辅助函数
// mapState 辅助函数可以将 store 中的 state 映射到局部计算属性 computed
// 详情请参照vuex-demo
// -----------------------------------------------------------------------------

export default state
