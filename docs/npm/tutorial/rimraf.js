/**
 * @name    rimraf
 * @desc    以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除
 *          https://www.npmjs.com/package/rimraf
 */
const rimraf = require('rimraf')
console.log('%s', '\033[1H]\033[2J')
// ---------------

rimraf('./play/a', function (err) {
  console.log(err)
})