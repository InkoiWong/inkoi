/**
 * @name    colors
 * @desc    命令行环境 字体效果
 *          https://www.npmjs.com/package/colors
 *
 * @keys    常用属性
 *          color: red yellow green blue cyan天蓝 magenta紫色 white gray/grey black
 *                 rainbow zebra america红白蓝 trap火星字 random
 */
const colors = require('colors')
colors.setTheme({})
console.log('%s', '\033[1H]\033[2J')
// ---------------

console.log('cyan'.cyan)