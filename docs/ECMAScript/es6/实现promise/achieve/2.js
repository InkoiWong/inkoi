// 判断变量否为function
const isFunction = variable => typeof variable === 'function';

class MyPromise {
  constructor(handle) {
    // 接收的参数必须为函数
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter');
    }
  }
}
