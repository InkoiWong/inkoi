/**
 * @name    process
 * @desc    Node.js 环境的全局变量-进程
 *
 * @keys    常用属性
 *          process.cwd() 方法返回 Node.js 进程的当前工作目录。
 *
 *          process.env 属性返回包含用户环境的对象。
 *            process.env.NODE_ENV 自定义环境变量
 *
 *          process.exit([code]) 方法以退出状态 code 指示 Node.js 同步地终止进程。
 *
 */
console.log('%s', '\033[1H]\033[2J')
// ---------------

console.log('cwd：', process.cwd()) // 与 __dirname 有一点区别，node.js进程当前工作的目录有可能不是该文件所在目录的完整目录。
console.log('__dirname：', __dirname) // 是node的一个全局变量，获得当前文件所在目录的完整目录名
console.log('__filename：', __filename) // 是node的一个全局变量 Node.js中，在任何模块文件内部，可以使用__filename变量获取当前模块文件的带有完整绝对路径的文件名