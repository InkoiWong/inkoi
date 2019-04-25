'use strict'
const merge = require('webpack-merge') // webpack-merge用于实现合并类似于ES6的Object.assign()
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  // （*注意属性值要用“‘’”双层引住），访问（获取值）时直接用：process.env.属性名
  // ps：process（进程）是nodejs的一个全局变量，process.env 属性返回一个用户环境信息的对象
  NODE_ENV: '"development"'
})
