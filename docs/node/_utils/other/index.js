const fs = require('fs');
const mimes = require('./mimes');

/**
 * 遍历读取目录内容（子目录，文件名）
 * @param  {string} reqPath 请求资源的绝对路径
 * @return {array} 目录内容列表
 */
function walk(reqPath) {
  let files = fs.readdirSync(reqPath);

  let dirList = [],
    fileList = [];
  for (let i = 0, len = files.length; i < len; i++) {
    let item = files[i];
    let itemArr = item.split('.');
    let itemMime =
      itemArr.length > 1 ? itemArr[itemArr.length - 1] : 'undefined';

    if (typeof mimes[itemMime] === 'undefined') {
      dirList.push(files[i]);
    } else {
      fileList.push(files[i]);
    }
  }

  let result = dirList.concat(fileList);

  return result;
}

/**
 * 同步创建文件目录
 * @param  {string} dirname 目录绝对地址
 * @return {boolean}        创建目录结果
 */
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}
