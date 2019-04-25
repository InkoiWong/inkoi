/**
 * @name    chalk
 * @desc    命令行环境 字体效果
 *          https://www.npmjs.com/package/chalk
 *
 * @keys    常用属性
 *          color: red yellow green blue cyan天蓝 magenta紫色 white gray black
 */
const chalk = require('chalk')
console.log('%s', '\033[1H]\033[2J')
// ---------------

console.log(chalk.cyan('cyan'))