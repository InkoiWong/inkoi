/**
 * @name    portfinder
 * @desc    查看空闲端口位置，默认情况下搜索8000这个端口
 *          如果正在使用，则一直往上搜索到空闲的端口返回
 *          https://www.npmjs.com/package/portfinder
 */
const portfinder = require('portfinder')
console.log('%s', '\033[1H]\033[2J')
// ---------------

// 当前查找端口
// console.log('portfinder.basePort:', portfinder.basePort);

// 可以修改自定义查找范围
// portfinder.basePort = 3000; // default: 8000
// portfinder.highestPort = 3333; // default: 65535

// 同上
// portfinder.getPort({
//   port: 3000, // minimum port
//   stopPort: 3333 // maximum port
// }, function (err, port) {
//   //
//   // `port` is guaranteed to be a free port
//   // in this scope.
//   //

//   if (err) {
//     console.log('err', err);
//     reject(err)
//   } else {
//     console.log('port', port); // 如果8000端口正在使用，则返回8001，以此类推
//   }
// });

// 正常使用
portfinder.getPort(function (err, port) {
  //
  // `port` is guaranteed to be a free port
  // in this scope.
  //

  if (err) {
    console.log('err', err);
    reject(err)
  } else {
    console.log('port', port); // 如果8000端口正在使用，则返回8001，以此类推
  }
});

// 如果允许使用Promise
// portfinder.getPortPromise()
//   .then((port) => {
//     //
//     // `port` is guaranteed to be a free port
//     // in this scope.
//     //
//     console.log('port', port);
//   })
//   .catch((err) => {
//     //
//     // Could not get a free port, `err` contains the reason.
//     //
//   });