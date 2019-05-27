# Promise

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

这里涉及到 Promise 的执行规则，包括“值的传递”和“错误捕获”机制：
