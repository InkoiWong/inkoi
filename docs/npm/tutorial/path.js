/**
 * @name    path
 * @desc    提供了用于处理文件和目录路径的实用程序
 *          https://www.npmjs.com/package/path
 */
const path = require('path')
console.log('%s', '\033[1H]\033[2J')
// ---------------

const testPathStr = './../test/sub1/aaa.html'

// path.basename（path [，ext]）
// 返回全名 -- 文件名.扩展名
// TypeError如果path不是字符串或者是否ext给定且不是字符串，则抛出A.
console.log('path.basename:', path.basename(testPathStr));
console.log('path.win32.basename:', path.win32.basename(testPathStr)); // 要在任何操作系统上使用Windows文件路径时获得一致的结果，请使用path.win32
console.log('path.posix.basename:', path.posix.basename(testPathStr)); // 要在任何操作系统上使用POSIX文件路径时获得一致的结果，请使用path.posix

// path.dirname（path）
// 返回目录名
// TypeError如果path不是字符串，则抛出A.
console.log('path.dirname:', path.dirname(testPathStr));

// path.extname（path）
// 获取拓展名 -- .拓展名
// 如果.在最后一部分中没有path，或者.除了path（参见path.basename()）的基本名称的第一个字符之外没有其他字符，则返回一个空字符串。
console.log('path.extname:', path.extname(testPathStr));

// path.parse（path）
// 将一个路径转换成一个js对象，与 path.format 相反
// （root根目录、dir全目录、base全名、ext拓展名、name文件名）
// TypeError如果path不是字符串，则抛出A.
console.log('path.parse:', path.parse(testPathStr));
console.log('path.parse.base === path.basename:', path.parse(testPathStr).base === path.basename(testPathStr));
console.log('path.parse.dir === path.dirname:', path.parse(testPathStr).dir === path.dirname(testPathStr));
console.log('path.parse.ext === path.extname:', path.parse(testPathStr).ext === path.extname(testPathStr));

// path.format（pathObject）
// 将一个js对象转换成路径，与 path.parse 相反
const textPathObj = {
  dir: '.\\test\\sub1',
  base: 'aaa.html'
}
console.log('path.format:', path.format(textPathObj));

// path.join（[... paths]）
// 使用特定于平台的分隔符作为分隔符将所有给定段连接在一起，然后规范化生成的路径。
// TypeError如果任何路径段不是字符串，则抛出A.
// 零长度path段被忽略。如果连接的路径字符串是零长度字符串，'.'则将返回，表示当前工作目录。
// '..'返回上一层
// '.'处于当前这一层
// ps：下面例子中的'..'把 eee 路径返回了，所以ddd接的fff
console.log('path.join:', path.join('aaa', 'bbb/', '/ccc', '/ddd/', 'eee'));
console.log('path.join:', path.join('/aaa', 'bbb', 'ccc/ddd', 'eee', '..'))
console.log('path.join:', path.join('/aaa', 'bbb', 'ccc/ddd', 'eee', '.'))
console.log('path.join:', path.join('/aaa', 'bbb', 'ccc/ddd', 'eee', '..', 'fff'))
console.log('path.join:', path.join('/aaa', 'bbb', 'ccc/ddd', 'eee', '.', 'fff'))

// path.isAbsolute（path）
// 判断是否是绝对路径。

// path.normalize（path）
// 规范化给定path，解析'..'和 '.'分段。
// TypeError如果path不是字符串，则抛出A.

// path.relative（from，to）
// 从 from 到 to 的相对位置
const str1 = './../test/sub1/aaa.html'
const str2 = './../test/sub2/eee.md'
console.log('path.relative:', path.relative(str1, str2));

// path.resolve（[... paths]）
// 将相对路径转为绝对路径
// TypeError如果任何参数不是字符串，则抛出A.
// 如果没有path传递段，path.resolve()将返回当前工作目录的绝对路径。
console.log('path.resolve:', path.resolve());
console.log('path.resolve:', path.resolve('/foo/bar', './baz'));
console.log('path.resolve:', path.resolve('/foo/bar', '/tmp/file/'));
console.log('path.resolve:', path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

// path.sep
// 当前系统所使用的路径段分隔符
// 在Windows上为 \
// 在POSIX上为 /
console.log('path.sep:', path.sep);
console.log('path.sep:', 'foo\\bar\\baz'.split(path.sep));

// path.toNamespacedPath（path）
// 仅在Windows系统上，返回给定的等效命名空间前缀路径path。如果path不是字符串，path将返回而不进行修改。
// 此方法仅在Windows系统上有意义。在POSIX系统上，该方法不可操作，并且始终path无需修改即可返回。

// path.posix
// 该path.posix属性提供对path方法的POSIX特定实现的访问。

// path.win32
// 该path.win32属性提供对特定于Windows的path方法实现的访问。