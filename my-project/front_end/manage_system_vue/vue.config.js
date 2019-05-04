const path = require('path')

function resolve (dir) {
  // 封装绝对路径
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    // 使用alias别名解析简化路径
    config.resolve.alias
      .set('@src', resolve('src'))
      .set('@views', resolve('src/views'))
      .set('@components', resolve('src/components'))
      .set('@assets', resolve('src/assets'))
      .set('@utils', resolve('src/utils'))
  }
}
