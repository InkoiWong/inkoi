/**
 * vue-cli3 提供了开箱即用的多页面配置，配置vue.config.js 中的 pages 选项即可
 * 因为每增加一个页面就需要增加个选项，不可能自己每次都添加
 * 考虑到借助工具来自动处理这些事情，所以单独配置了 multiPage.config.js 文件，借助 node 来自动处理
 */

// 多页面配置
const fs = require('fs')
const path = require('path')

const fileNames = fs.readdirSync(path.resolve(__dirname, './src/pages'))
const mutiPageConfig = {}

fileNames.forEach((pageName) => {
  mutiPageConfig[pageName] = {
    // page 的入口
    entry: `src/pages/${pageName}/index.js`,
    // 模板来源
    template: `src/pages/${pageName}/index.html`,
    // 在 dist 的输出
    filename: `views/${pageName}/index.html`,
    // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    // title: '',
    // 在这个页面中包含的块，默认情况下会包含提取出来的通用 chunk 和 vendor chunk，如果自己有配置 splitChunks 选项，可以在此添加
    chunks: ['chunk-vendors', 'chunk-common', pageName]
  }
})

module.exports = mutiPageConfig
