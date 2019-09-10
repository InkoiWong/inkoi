/**
 * @name    fs
 * @desc    文件系统
 *          https://www.npmjs.com/package/fs
 *
 *          所有文件系统操作都具有同步和异步的形式。e.g fs.readFile & fs.readFileSync
 *          异步的形式总是将完成回调作为其最后一个参数。 传给完成回调的参数取决于具体方法，但第一个参数始终预留用于异常。 如果操作成功完成，则第一个参数将为 null 或 undefined。
 *
 *          同时可以使用常规函数和Promise函数
 */
const fs = require('fs');
console.log('%s', '\033[1H]\033[2J');
// ---------------

let file = './../test/sub1/ccc.js';

/**
 * @member  fs.constants
 *          返回包含文件系统操作常用常量的对象。 当前定义的特定常量在 FS常量 中描述。
 *
 *          http://nodejs.cn/api/fs.html#fs_fs_constants_1
 */

/**
 * @member  fs.access(path[, mode], callback(err))
 *          查看用户 path 指定的文件或目录的权限。
 *
 *          mode 参数是一个可选的整数，指定要执行的可访问性检查。 mode 可选的值参阅文件可访问性的常量。 可以创建由两个或更多个值按位或组成的掩码（例如 fs.constants.W_OK | fs.constants.R_OK）。
 *          ps：不建议在调用 fs.open()、 fs.readFile() 或 fs.writeFile() 之前使用 fs.access() 检查文件的可访问性。 这样做会引入竞态条件，因为其他进程可能会在两个调用之间更改文件的状态。 相反，应该直接打开、读取或写入文件，如果文件无法访问则处理引发的错误。
 */
// fs.access(file, fs.constants.F_OK, (err) => {
//   // 检查当前目录中是否存在该文件。
//   console.log(`${file} ${err ? '不存在' : '存在'}`);
// });
// fs.access(file, fs.constants.R_OK, (err) => {
//   // 检查文件是否可读。
//   console.log(`${file} ${err ? '不可读' : '可读'}`);
// });
// fs.access(file, fs.constants.W_OK, (err) => {
//   // 检查文件是否可写。
//   console.log(`${file} ${err ? '不可写' : '可写'}`);
// });
// fs.access(file, fs.constants.F_OK | fs.constants.W_OK, (err) => {
//   // 检查当前目录中是否存在该文件，以及该文件是否可写。
//   if (err) {
//     console.error(`${file} ${err.code === 'ENOENT' ? '不存在' : '只可读'}`);
//   } else {
//     console.log(`${file} 存在，且它是可写的`);
//   }
// });

/**
 * @member  fs.chmod(path, mode, callback)
 *          异步地更改文件的权限。 除了可能的异常，完成回调没有其他参数。
 *
 *          http://nodejs.cn/api/fs.html#fs_fs_chmod_path_mode_callback
 */

/**
 * @member  fs.stat(path[, options], callback(err, stat))
 *          读取文件状态
 *
 *          只允许不操作文件的情况下才使用此方法，如果需要读写的话，直接使用 fs.readFile 和 fs.writeFile
 */
// fs.stat(file, (err, stat) => {
//   if (err) throw err

//   // 是否是文件:
//   console.log('isFile: ' + stat.isFile());
//   // 是否是目录:
//   console.log('isDirectory: ' + stat.isDirectory());
//   if (stat.isFile()) {
//     // 文件大小:
//     console.log('文件大小: ' + stat.size);
//     // 创建时间, Date对象:
//     console.log('创建时间: ' + stat.birthtime);
//     // 修改时间, Date对象:
//     console.log('修改时间: ' + stat.mtime);
//   }
// })

/**
 * @member  fs.utimes(path, atime, mtime, callback(err))
 *          更改 path 指向的对象的文件系统时间戳。
 */
// fs.utimes(file, '', '', (err) => {
//   if (err) throw err;
//   console.log('文件系统时间戳已修改');
// })

/**
 * @member  fs.realpath(path[, options], callback)
 *          通过解析 .、 .. 和符号链接异步地计算规范路径名。
 */
// fs.realpath(file, 'utf-8', (err, resolvedPath) => {
//   if (err) throw err;
//   console.log('该文件解析的路径', resolvedPath);
// })

/**
 * @member  fs.readdir(path[, options], callback(err, files))
 *          异步读取目录的内容。
 */
// fs.readdir('./../test', (err, files) => {
//   if (err) throw err;
//   console.log('该目录下的一级子集', files);
// })

/**
 * @member  fs.mkdir(path[, options], callback(err))
 *          异步地创建目录。 除了可能的异常，完成回调没有其他参数。
 */
// fs.mkdir('./../test/tmp/a/apple', {
//   recursive: true // 递归创建
// }, (err) => {
//   // 创建 /tmp/a/apple 目录，无论是否存在该整个目录
//   if (err) throw err;
// });

/**
 * @member  fs.rmdir(path, callback(err))
 *          异步删除文件夹
 */
// fs.rmdir('./../test/sub3', (err) => {
//   if (err) throw err;
//   console.log('文件夹已删除');
// })

/**
 * @member  fs.readFile(path[, options], callback(err, data))
 *          异步地读取文件的全部内容。
 */
// fs.readFile(file, 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log('该文件的内容', data);
// })

/**
 * @member  fs.open(path, flags[, mode], callback(err, fd))
 *          异步地打开文件。
 */

/**
 * @member  fs.rename(oldPath, newPath, callback(err))
 *          异步地将 oldPath 上的文件重命名为 newPath 提供的路径名。
 *          就是'移动文件'
 *          如果只有文件名不同，则为'重命名'
 *
 *          如果 newPath 已存在，则覆盖它。 除了可能的异常，完成回调没有其他参数。
 */
// fs.rename('./../test/sub2/fff.txt', './../test/sub2/fff2.txt', (err) => {
//   if (err) throw err;
//   console.log('文件移动/重命名完成');
// })

/**
 * @member  fs.copyFile(src, dest[, flags], callback(err))
 *          异步地将 src 拷贝到 dest。 默认情况下，如果 dest 已经存在，则覆盖它。 除了可能的异常，回调函数没有其他参数。
 *          Node.js 不保证拷贝操作的原子性。 如果在打开目标文件用于写入后发生错误，则 Node.js 将尝试删除目标文件。
 */
// fs.copyFile('./../test/sub1/源文件.txt', './../test/sub2/复制文件.txt', (err) => {
//   if (err) throw err;
//   console.log('源文件已拷贝到目标文件');
// });
// fs.copyFile('./../test/sub1/源文件.txt', './../test/sub2/复制文件.txt', fs.constants.COPYFILE_EXCL, (err) => {
//   if (err) throw err;
//   console.log('源文件已拷贝到目标文件');
// });

/**
 * @member  fs.appendFile(path, data[, options], callback(err))
 *          异步地将数据追加到文件，如果文件尚不存在则创建该文件。 data 可以是字符串或 Buffer。
 */
// fs.appendFile(file, '追加的数据', (err) => {
//   if (err) throw err;
//   console.log('数据已追加到文件');
// });

/**
 * @member  fs.writeFile(file, data[, options], callback(err))
 *          异步地将数据写入到一个文件，如果文件已存在则覆盖该文件。
 *
 *          ps：在同一个文件上多次使用 fs.writeFile() 且不等待回调是不安全的。 对于这种情况，建议使用 fs.createWriteStream()。
 */
// fs.writeFile(file, '通过fs.writeFile方法写入的数据', (err) => {
//   if (err) throw err;
//   console.log('文件已被保存');
// });

/**
 * @member  fs.unlink(path, callback(err))
 *          异步地删除文件或符号链接
 */
// fs.unlink('./../test/sub3/aaa.txt', (err) => {
//   if (err) throw err;
//   console.log('文件已删除');
// })

/**
 * @member  fs.watch(filename[, options][, listener])
 *          监视 filename 的更改，其中 filename 是文件或目录。
 *
 *          options <string> | <Object>
 *            - persistent <boolean = true> 指示如果文件已正被监视，进程是否应继续运行
 *            - recursive <boolean = false> 指示应该监视所有子目录，还是仅监视当前目录。
 *            - encoding <string = 'utf-8'> 指示应该监视所有子目录，还是仅监视当前目录。
 *
 *          listener <Function> | <undefined>
 *            - eventType <string> 其值可以是 'rename' 或 'change'，每当文件名在目录中出现或消失时，就会触发 'rename' 事件。
 *            - filename <string> | <Buffer> 是触发事件的文件的名称
 */
// fs.watch('./../test/sub3', {
//   recursive: true
// }, (eventType, filename) => {
//   console.log(`事件类型是: ${eventType}`);
//   if (filename) {
//     console.log(`提供的文件名: ${filename}`);
//   } else {
//     console.log('文件名未提供');
//   }
// });

/**
 * @member  fs.watchFile(filename[, options], listener)
 *          建议使用 fs.watch
 */
/**
 * @member  fs.unwatchFile(filename[, listener])
 *          建议使用 fs.watch
 */
