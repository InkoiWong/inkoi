/**
 * @name    glob
 * @desc    node的glob模块允许你使用 *等符号, 来写一个glob规则,像在shell里一样,获取匹配对应规则的文件.
 *          https://www.npmjs.com/package/glob
 *
 *          https://www.cnblogs.com/liulangmao/p/4552339.html
 *          https://segmentfault.com/q/1010000012492047
 */
const glob = require('glob')
console.log('%s', '\033[1H]\033[2J')
// ---------------

let relatePathStr = './*.js'
let absoluPathStr = `${__dirname}/*.js`

/*
  glob（pattern，[options]，cb）
  pattern {String} 要匹配的模式
  options {Object}
  cb {Function}
    err {Error | null}
    matches {Array<String>} 找到与模式匹配的文件名
  执行异步全局搜索。
*/

/*
  glob.sync（pattern，[options]）
  pattern {String} 要匹配的模式
  options {Object}
  return：{Array<String>}找到与模式匹配的文件名
  执行同步glob搜索。
*/

glob(relatePathStr, (err, files) => {
  if (err) throw err
  console.log('files(相对路径):', files);
})
// glob(absoluPathStr, (err, files) => {
//   if (err) throw err
//   console.log('files(绝对路径):', files);
// })

// const files = glob.sync(relatePathStr)
// console.log('files(相对路径):', files);
// const files = glob.sync(absoluPathStr)
// console.log('files(绝对路径):', files);

/*
  pattern字段详细解析
*/
// 1、 * ：匹配单个路径部分中的0个或多个字符。
// 2、 ? ：匹配路径中某部分1个字符。
// 3、[...]： 匹配一个字符的范围， 类似于一个正则表达式的范围。 如果范围的第一个字符是！ 或者， 它匹配任何不在范围内的字符。
// 4、!(模式1 | 模式2 | 模式3)： 匹配与所提供的任何模式不匹配的任何内容。 和正则表达式的!一样。
// 5、 ? (模式1 | 模式2 | 模式3)： 匹配所提供的模式的零或一个事件。
// 6、 + (模式1 | 模式2 | 模式3)： 匹配所提供的模式的一个或多个事件。
// 7、 * (a | b | c)： 匹配所提供的模式的零个或多个事件。
// 8、 @(pattern | pat * | pat ? erN)： 匹配所提供的模式之一。
// 9、 ** ：如果 ** 在一个路径的部分， 他会匹配零个或多个目录和子目录中搜索匹配