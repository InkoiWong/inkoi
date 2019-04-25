const glob = require('glob')
const fs = require('fs')
const path = require('path')
console.log('%s', '\033[1H]\033[2J')
// ---------------

const files = glob.sync('./tutorial/*.js');
// console.log('files', files);

fs.readFile(path.join(__dirname, './常用npm包.md'), 'utf8', function (
  err,
  data
) {
  if (err) throw err

  console.log('未被收录的使用教程文件:');

  files.forEach(function (item, i) {
    if (data.indexOf(item) >= 0) return

    console.log(path.basename(item));
  })
})