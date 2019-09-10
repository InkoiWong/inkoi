const path = require('path');
const fs = require('fs');

/**
 * 遍历目录下的文件目录
 * @param  {string} absolutePath  需进行遍历的目录路径
 *
 * @return {object}       返回遍历后的目录结果
 */
const walk = function(absolutePath) {
  let files = fs.readdirSync(absolutePath);

  let dirList = [];
  let fileList = [];
  for (let i = 0, len = files.length; i < len; i++) {
    let item = files[i];

    let itemPath = path.join(absolutePath, item);
    let itemStat = fs.statSync(itemPath);
    if (itemStat.isDirectory()) {
      dirList.push(item);
    } else {
      fileList.push(item);
    }
  }

  return {
    dirList,
    fileList
  };
};

let absolutePath = path.join(__dirname, '..');
let result = walk(absolutePath);
console.log('result', result);
