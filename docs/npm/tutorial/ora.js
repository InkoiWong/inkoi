/**
 * @name    ora
 * @desc    命令行环境 loading效果
 *          https://www.npmjs.com/package/ora
 */
const ora = require('ora')
console.log('%s', '\033[1H]\033[2J')
// ---------------

const spinner = ora('加载中')
spinner.start()
setTimeout(() => {
  spinner.color = 'red'
  spinner.text = '一'
}, 1000)
setTimeout(() => {
  spinner.color = 'yellow'
  spinner.text = '二'
}, 2000)
setTimeout(() => {
  spinner.stop()
  // spinner.succeed('succeed了哦')
  // spinner.fail('fail了哦')
  // spinner.warn('warn了哦')
  // spinner.info('info了哦')
}, 3000)