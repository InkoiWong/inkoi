/**
 * actions
 *
 * @summary   异步提交 mutation 的API
 * @desc
 * Action 类似于 mutation，不同在于：
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 *
 * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
 * 当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。
 *
 */

// Example
// -----------------------------------------------------------------------------
// 1.分发action
// 接受 context 作为第一个参数
// 写法一
// const PLUS_ONE_INACTIONS = (context) => {
//   context.commit('PLUS_ONE')
// }
// 写法二
const PLUS_ONE_INACTIONS = ({ commit, state }) => {
  commit('PLUS_ONE')
}
// 使用方法 $store.dispatch('PLUS_ONE_INACTIONS')

// 2.支持异步
const MINUS_ONE_ASYNC_INACTIONS = ({ commit, state }) => {
  setTimeout(() => {
    commit('MINUS_ONE')
  }, 1000)
}

// 3.支持同样的载荷方式和对象方式进行分发
const PLUS_INACTIONS = ({ commit, state }, plusNum) => {
  commit('PLUS', plusNum)
}
const MINUS_INACTIONS = ({ commit, state }, payload) => {
  commit('MINUS', payload)
}

// 4.使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）
// 详情请参照vuex-demo

// 5.组合action
// Action 通常是异步的，那么如何知道 action 什么时候结束呢？
// 更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程？
// 首先，你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise，并且 store.dispatch 仍旧返回 Promise
const actionA = ({ commit }) => {
  console.log('start actionA')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('async from setTimeout')
      commit('PLUS_ONE')
      resolve()
    }, 1000)
  })
}

// 这样我们就可以
// $store.dispatch('actionA').then(() => {})

// 在另外一个 action 中也可以
const actionB = ({ dispatch, commit }) => {
  console.log('start actionB')
  return dispatch('actionA').then(() => {
    console.log('async from actionA')
    commit('MINUS_ONE')
  })
}

// 最后，如果我们利用 async / await，我们可以如下组合 action
// 假设 PromiseC() 和 PromiseD() 返回的是 Promise
const PromiseC = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('PromiseC')
      resolve()
    }, 1000)
  })
}
const PromiseD = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('PromiseD')
      resolve()
    }, 1000)
  })
}
const actionC = async ({ commit, state }) => {
  console.log('start actionC')
  commit('PLUS_ONE', await PromiseC())
  console.log('countInActionC', state.count)
}
const actionD = async ({ dispatch, commit, state }) => {
  console.log('start actionD')
  await dispatch('actionC') // 等待 actionC 完成
  commit('MINUS_ONE', await PromiseD())
  console.log('countInActionD', state.count)
}
// 一个 store.dispatch 在不同模块中可以触发多个 action 函数。在这种情况下，只有当所有触发函数完成后，返回的 Promise 才会执行

export default {
  PLUS_ONE_INACTIONS,
  MINUS_ONE_ASYNC_INACTIONS,

  PLUS_INACTIONS,
  MINUS_INACTIONS,

  actionA,
  actionB,

  actionC,
  actionD
}
// -----------------------------------------------------------------------------
