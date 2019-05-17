/**
 * getters
 *
 * @summary   取出状态API
 * @desc
 * 从数据库里取出派生状态的 API
 * 是一个纯函数，接收参数 state，返回你想取的值
 * 返回的是一个被控制的值，因此可以先对获得的数据进行处理，然后再返回出去。
 * 有时候我们需要从 store 中的 state 中派生出一些状态
 * Getter 会暴露为 store.getters 对象
 *
 */

// Example
// -----------------------------------------------------------------------------
// 1.Getter 接受 state 作为其第一个参数
// 获取 store 中的 todos 状态
const getTodos = (state) => {
  return state.todos
}
// 使用方法 $store.getters.getTodos // -> 取出值同 $store.state.todos

const doneTodos = (state) => {
  return state.todos.filter(todo => todo.done)
}
// 使用方法 $store.getters.doneTodos // -> [{ id: 1, text: '...', done: true }]

// 2.Getter 也可以接受 getters 作为第二个参数
const doneTodosCount = (state, getters) => {
  return getters.doneTodos.length
}
// 使用方法 $store.getters.doneTodosCount // -> 1

// 3.你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用
const getTodoById = (state) => (id) => {
  return state.todos.find(todo => todo.id === id)
}
// 使用方法 $store.getters.getTodoById(2) // -> { id: 2, text: '...', done: false }

// 4.mapGetters 辅助函数
// mapGetters 辅助函数可以将 store 中的 getter 映射到局部计算属性 computed
// 详情请参照vuex-demo

export default {
  getTodos,
  doneTodos,
  doneTodosCount,
  getTodoById
}
// -----------------------------------------------------------------------------
