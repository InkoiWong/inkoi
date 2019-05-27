// 应用场景1
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
