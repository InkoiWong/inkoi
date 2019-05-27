// 判断变量否为function
const isFunction = variable => typeof variable === 'function';

// 首先定义三个常量，用于标记Promise对象的三种状态（new）
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(handle) {
    // 接收的参数必须为函数
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter');
    }

    // 添加状态（new）
    this._status = PENDING;
    // 添加值（new）
    this._value = undefined;

    // 执行handle（new）
    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }

  // 添加resovle时执行的函数（new）
  _resolve(val) {
    if (this._status !== PENDING) return;
    this._status = FULFILLED;
    this._value = val;
  }
  // 添加reject时执行的函数（new）
  _reject(err) {
    if (this._status !== PENDING) return;
    this._status = REJECTED;
    this._value = err;
  }
}
