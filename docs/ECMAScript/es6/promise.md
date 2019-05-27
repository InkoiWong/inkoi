# Promise

[参考文章](https://www.jianshu.com/p/43de678e918a)
[参考文章](https://www.jianshu.com/p/327e38aec874)
[参考文章](https://juejin.im/post/5ce767f2f265da1bd522a8c0)

## 1. Promise 基本结构

构造函数 Promise 必须接受一个函数作为参数，我们称该函数为 `handle`，handle 又包含 `resolve` 和 `reject` 两个参数，它们是两个函数。

[](.\实现promise\achieve\1.js)

## 2. handle 参数

现在我们定义一个名为 Promise 的 Class，它接受一个函数 handle 作为参数

[](.\实现promise\achieve\2.js)

## 3. Promise 的状态和值

Promise 对象存在以下三种`状态`：

- Pending(进行中)
- Fulfilled(已成功)
- Rejected(已失败)

> 状态只能由 `Pending 变为 Fulfilled` 或由 `Pending 变为 Rejected` ，且状态改变之后不会再发生变化，会一直保持这个状态。

Promise 的`值`是指状态改变时传递给回调函数的值：

- 上文中 handle 函数包含 `resolve` 和 `reject` 两个参数，它们是两个函数，可以用于改变 Promise 的状态和传入 Promise 的值
- resolve : 将 Promise 对象的状态从 Pending(进行中) 变为 Fulfilled(已成功)
- reject : 将 Promise 对象的状态从 Pending(进行中) 变为 Rejected(已失败)
- resolve 和 reject 都可以传入任意类型的值作为实参，表示 Promise 对象成功（Fulfilled）和失败（Rejected）的值

了解了 Promise 的状态和值，接下来，我们为 Promise 添加状态属性和值

[](.\实现promise\achieve\3.js)

这样就实现了 Promise 状态和值的改变。

## 3. Promise 的 then 方法

Promise 对象的 then 方法接受`两个可选参数`：
如果 onFulfilled 或 onRejected 不是函数，其必须被忽略

```js
promise.then(onFulfilled, onRejected);
```

两个函数的特性：

- 当 promise 状态变为 `成功/失败` 时必须被调用，其第一个参数为 promise `成功/失败` 状态传入的值（ `resolve/reject` 执行时传入的值）
- 在 promise 状态改变前其不可被调用
- 其调用次数不可超过一次

返回

then 方法必须`返回一个新的 promise 对象`

```js
promise2 = promise1.then(onFulfilled, onRejected);
```

因此 promise 支持`链式调用`

```js
promise1.then(onFulfilled1, onRejected1).then(onFulfilled2, onRejected2);
```

## 4. Promise 的执行规则

[](.\实现promise\achieve\4.js)

这里涉及到 Promise 的执行规则，包括`值的传递`和`错误捕获`机制：

1 `onFulfilled/onRejected` 为 `值`：
1-1 promise1 状态为 Fulfilled：promise2 必须变为 Fulfilled 并返回 promise1 成功的值
1-2 promise1 状态为 Rejected：promise2 必须变为 Rejected 并返回 promise1 失败的值

2 `onFulfilled/onRejected` 为 `函数`，返回一个值 res：
2-1 当 res 不为 Promise 时：
2-1-1 res 返回值为正常值，作为新的 onFulfilled 的参数
2-1-2 throw new Error(异常值)，作为新的 onRejected 的参数
2-2 当 res 为 Promise 时：这时后一个 then 回调函数，就会等待该 Promise 对象(即 res )的状态发生变化，才会被调用，并且新的 Promise 状态和 res 的状态相同

## 5. 根据上述规则，来完善 MyPromise

修改 constructor : 增加执行队列
1 由于 then 方法支持多次调用，我们可以维护`两个数组`，将每次 then 方法注册时的回调函数添加到数组中，等待执行
2 添加 then 方法
[](.\实现promise\achieve\5.js)

那返回的新的 Promise 对象什么时候改变状态？改变为哪种状态呢？
根据上文中 then 方法的规则，我们知道返回的新的 Promise 对象的状态依赖于当前 then 方法回调函数执行的情况以及返回值，例如 then 的参数是否为一个函数、回调函数执行是否出错、返回值是否为 Promise 对象。
我们来进一步完善 then 方法：

[](.\实现promise\achieve\6.js)
