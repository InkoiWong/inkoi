// 应用场景2

// 1-1
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 1000);
// });
// promise2 = promise1.then('这里的onFulfilled本来是一个函数，但现在不是');
// promise2.then(
//   res => {
//     console.log('res', res); // 1秒后打印出：success
//   },
//   err => {
//     console.log('err', err);
//   }
// );

// 1-2
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('fail');
//   }, 1000);
// });
// promise2 = promise1.then(
//   res => res,
//   '这里的onRejected本来是一个函数，但现在不是'
// );
// promise2.then(
//   res => {
//     console.log('res', res);
//   },
//   err => {
//     console.log('err', err); // faol
//   }
// );

// 2-1-1
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 1000);
// });
// promise2 = promise1.then(res => {
//   return '测试值';
// });
// promise2.then(
//   res => {
//     console.log('res', res); // 1秒后打印出：测试值
//   },
//   err => {
//     console.log('err', err);
//   }
// );

// 2-1-2
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 1000);
// });
// promise2 = promise1.then(res => {
//   throw new Error('异常');
// });
// promise2.then(
//   res => {
//     console.log('res', res);
//   },
//   err => {
//     console.log('err', err); // 1秒后打印出：异常
//   }
// );

// 2-2
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 1000);
// });
// promise2 = promise1.then(res => {
//   // 返回一个Promise对象
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('这里resolve返回一个Promise');
//     }, 2000);
//   });
// });
// promise2.then(
//   res => {
//     console.log('res', res); // 3秒后打印出：这里resolve返回一个Promise
//   },
//   err => {
//     console.log('err', err);
//   }
// );

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success');
//   }, 1000);
// });
// promise2 = promise1.then(res => {
//   // 返回一个Promise对象
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('这里reject返回一个Promise');
//     }, 2000);
//   });
// });
// promise2.then(
//   res => {
//     console.log('res', res);
//   },
//   err => {
//     console.log('err', err); // 3秒后打印出：这里reject返回一个Promise
//   }
// );
