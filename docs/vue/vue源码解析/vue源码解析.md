# 一、Vue 的本质

> Vue 的本质就是用一个 `Function` 实现的 Class，然后在它的原型 `prototype` 和本身上面扩展一些属性和方法。

[核心文件](./vue/src/core/index.js)

## Vue 定义构造函数

[定义构造函数](./vue/src/core/instance/index.js)

使用 ES5 的方式，即用`函数来实现一个 class`，不用 ES6 来实现 class 的原因：在 ES5 中，是可以往 Vue 的原型上挂很多方法，并且可以将不同的原型方法拆分到不同的文件下，这样方便代码的管理，不用再单个文件上把 Vue 的原型方法都定义一遍

## 全局方法

[定义全局方法](./vue/src/core/global-api/index.js)

# 二、核心思想：数据驱动

## 2-1 数据驱动

> 所谓的数据驱动，是指`视图是由数据驱动生成`的，对`视图的修改`，不再直接操作 DOM，而是通过`修改数据`。我们所关心的只是`数据的修改，DOM 变成了数据的映射`。

它相比我们传统的前端开发，如使用 jQuery 等前端库直接修改 DOM，大大简化了代码量。特别是当交互复杂的时候，只关心数据的修改会让代码的逻辑变的非常清晰，因为 DOM 变成了数据的映射，我们所有的逻辑都是对数据的修改，而不用碰触 DOM，这样的代码非常利于维护。

可以采用简洁的`模板语法`来声明式的将数据渲染为 DOM

数据驱动的两个`核心思想`：模板和数据是如何渲染成最终的 DOM；如何让数据更新驱动视图变化

## 2-2 模板渲染

```js
new Vue({
  el: ...,
  template: ...,
  data: ...,
  ....
})
```

### 2-2-1 简单概括

`{ 问题：vue 中模板和数据如何渲染成最终的 DOM？ }`

1）new 关键字实例化一个对象，Vue() 是一个类，在 js 中类用 Function 定义

2）在 Vue() 函数中调用`初始化函数`：

[](./vue/src/core/instance/index.js)

```js
initMixin();
```

然后`合并配置`，`初始化生命周期`，`初始化事件中心`，`初始化渲染`，`初始化 data、props、computed、watcher` 等等。

[](./vue/src/core/instance/init.js)

```js
initLifecycle(vm);
initEvents(vm);
initRender(vm);
callHook(vm, 'beforeCreate');
initInjections(vm); // resolve injections before data/props
initState(vm);
initProvide(vm); // resolve provide after data/props
callHook(vm, 'created');
```

Vue 的初始化逻辑写的非常清楚，把不同的功能逻辑拆成一些单独的函数执行，让主线逻辑一目了然

3）在初始化的最后，检测到如果有 `el` 属性，则调用 `vm.$mount` 方法挂载 vm，挂载的目标就是把模板渲染成最终的 `DOM`

[](./vue/src/core/instance/init.js)

```js
if (vm.$options.el) {
  vm.$mount(vm.$options.el);
}
```

### 2-2-2 重点分析

`initState()` 方法：实际就是 `初始化props、methods、data、computed、watch`

[](./vue/src/core/instance/state.js)

```js
export function initState(vm: Component) {
  vm._watchers = [];
  const opts = vm.$options;
  if (opts.props) initProps(vm, opts.props);
  if (opts.methods) initMethods(vm, opts.methods);
  if (opts.data) {
    initData(vm);
  } else {
    observe((vm._data = {}), true /* asRootData */);
  }
  if (opts.computed) initComputed(vm, opts.computed);
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}
```

这里 `initData()` 做了一些事情
1） 判断 data 是否`函数`
2） 判断与 props 是否有`重名`。因为最后都会挂载到 `vm 对象`上，然后对 vm 对象进行一层 `proxy 代理`，getter 和 setter
[proxy](./vue/src/core/instance/state.js)
3） 最后 `observe` data
[observe](./vue/src/core/observer/index.js)

---

`vm.$mount` 方法：
