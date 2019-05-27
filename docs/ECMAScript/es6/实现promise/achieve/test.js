var p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('rejected');
  }, 1000);
});

p.then(
  res => {
    console.log('res1', res);
  },
  res => {
    console.log('res2', res);
  }
);

// var p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// });

// p.then(res => {
//   console.log('res1', res);

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('这里返回一个Promise');
//     }, 2000);
//   });
// }).then(res => {
//   console.log('res2', res);
// });
