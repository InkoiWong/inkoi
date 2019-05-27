// 判断变量否为function
const isFunction = variable => typeof variable === 'function';

// 首先定义三个常量，用于标记Promise对象的三种状态
const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor(handle) {
    // 接收的参数必须为函数
    if (!isFunction(handle)) {
      throw new Error('MyPromise must accept a function as a parameter');
    }

    // 添加状态
    this._status = PENDING;
    // 添加值
    this._value = undefined;

    // 添加成功回调函数队列
    this._fulfilledQueues = [];
    // 添加失败回调函数队列
    this._rejectedQueues = [];

    // 执行handle
    try {
      handle(this._resolve.bind(this), this._reject.bind(this));
    } catch (err) {
      this._reject(err);
    }
  }

  // 添加resovle时执行的函数
  _resolve(val) {
    if (this._status !== PENDING) return;
    this._status = FULFILLED;
    this._value = val;
  }
  // 添加reject时执行的函数
  _reject(err) {
    if (this._status !== PENDING) return;
    this._status = REJECTED;
    this._value = err;
  }

  // 添加then方法
  then(onFulfilled, onRejected) {
    const { _value, _status } = this;
    switch (_status) {
      // 当状态为pending时，将then方法回调函数加入执行队列等待执行
      case PENDING:
        this._fulfilledQueues.push(onFulfilled);
        this._rejectedQueues.push(onRejected);
        break;
      // 当状态已经改变时，立即执行对应的回调函数
      case FULFILLED:
        onFulfilled(_value);
        break;
      case REJECTED:
        onRejected(_value);
        break;
    }

    // 返回一个新的Promise对象（new）
    return new MyPromise((onFulfilledNext, onRejectedNext) => {
      // 封装一个成功时执行的函数
      let fulfilled = value => {
        try {
          if (!isFunction(onFulfilled)) {
            onFulfilledNext(value);
          } else {
            let res = onFulfilled(value);
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res);
            }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err);
        }
      };
      // 封装一个失败时执行的函数
      let rejected = error => {
        try {
          if (!isFunction(onRejected)) {
            onRejectedNext(error);
          } else {
            let res = onRejected(error);
            if (res instanceof MyPromise) {
              // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
              res.then(onFulfilledNext, onRejectedNext);
            } else {
              //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
              onFulfilledNext(res);
            }
          }
        } catch (err) {
          // 如果函数执行出错，新的Promise对象的状态为失败
          onRejectedNext(err);
        }
      };
      switch (_status) {
        // 当状态为pending时，将then方法回调函数加入执行队列等待执行
        case PENDING:
          this._fulfilledQueues.push(fulfilled);
          this._rejectedQueues.push(rejected);
          break;
        // 当状态已经改变时，立即执行对应的回调函数
        case FULFILLED:
          fulfilled(_value);
          break;
        case REJECTED:
          rejected(_value);
          break;
      }
    });
  }
}
