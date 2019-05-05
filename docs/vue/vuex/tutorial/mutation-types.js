/**
 * mutation-types
 *
 * @summary   使用常量替代 Mutation 事件类型
 * @desc
 * 使用常量替代 mutation 事件类型在各种 Flux 实现中是很常见的模式。
 * 这样可以使 linter 之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个 app 包含的 mutation 一目了然
 *
 */

 // Example
// -----------------------------------------------------------------------------
const PLUS_ONE = 'PLUS_ONE'
const MINUS_ONE = 'MINUS_ONE'
const PLUS = 'PLUS'
const MINUS = 'MINUS'

//  Truly used
// -----------------------------------------------------------------------------
// Vux-页面切换显示loading
const UPDATE_LOADING_STATUS = 'UPDATE_LOADING_STATUS'

// -----------------------------------------------------------------------------
export default {
  // Example
  PLUS_ONE,
  MINUS_ONE,
  PLUS,
  MINUS,

  //  Truly used
  UPDATE_LOADING_STATUS
}
