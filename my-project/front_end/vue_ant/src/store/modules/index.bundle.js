/**
 * 将本文件夹下的其他所有文件打包成一个文件导出
 * 供其他地方调用
 */

// 读取某目录下的文件
// require.context(路径, 是否遍历子目录, 文件名的匹配正则)
const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  // 排除掉自己→_→
  if (key === './index.bundle.js') return

  modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default modules
