/**
 * @name    mkdirp
 * @desc    递归创建目录及其子目录
 *          https://www.npmjs.com/package/mkdirp
 */
const mkdirp = require('mkdirp')
console.log('%s', '\033[1H]\033[2J')
// ---------------

mkdirp('./play/a/b', function (err) {
  if (err) console.error(err)
  else console.log('pow!')
})