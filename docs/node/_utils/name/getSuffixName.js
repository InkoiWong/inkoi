/**
 * 获取文件的后缀名
 * @param  {string} fileName 文件名
 * @return {string}          文件后缀名
 */
function getSuffixName(fileName) {
  let nameList = fileName.split('.');
  return nameList[nameList.length - 1];
}
