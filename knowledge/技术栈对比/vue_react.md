# vue 与 react 的对比

http://caibaojian.com/vue-vs-react.html
https://www.jianshu.com/p/b7cd52868e95?from=groupmessage

1.  `模板的编写`
    1.  Vue 鼓励你去写`近似常规 HTML 的模板`。写起来很接近标准 HTML 元素，只是多了一些属性。
        Vue 鼓励你去使用 HTML 模板去进行渲染，使用相似于 Angular 风格的方法去输出动态的内容。因此，通过把原有的模板整合成新的 Vue 模板，Vue 很容易提供旧的应用的升级。这也`让新来者很容易适应它的语法`。
    2.  React 推荐你所有的模板通用 JavaScript 的语法扩展——`JSX` 书写。
        React/JSX 乍看之下，觉得非常啰嗦，但使用 JavaScript 而不是模板来开发，`赋予了开发者许多编程能力`。
2.  `监听数据变化`的`实现原理`
    1.  Vue 通过 getter/setter 以及一些函数的`劫持`，能精确知道数据变化，不需要特别的优化就能达到很好的性能
    2.  React 默认是通过`比较引用`的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的 VDOM 的重新渲染
3.  `设计理念`（基于第二点）
    1.  Vue 使用的是可变数据，而 React 更强调数据的不可变。
4.  `状态的管理`（基于第三点）
    1.  如果你对 React 熟悉，你就会知道应用中的状态是（React）关键的概念。也有一些配套框架被设计为管理一个大的 state 对象，如 Redux。此外，state 对象在 React 应用中是不可变的，意味着它不能被直接改变（这也许不一定正确）。在 React 中你需要使用 `setState()`方法去更新状态。
    2.  在 Vue 中，state 对象并不是必须的，数据由 data 属性在 Vue 对象中进行管理。
        而在 Vue 中，则不需要使用如 setState()之类的方法去改变它的状态，在 Vue 对象中，data 参数就是应用中数据的保存者。
5.  `渲染模式`（基于第三点）
    1.  vue 是双向绑定
    2.  react 是单向数据流
6.  `使用场景`
    1.  Vue 的解决方案适用于小型应用（双向绑定使 Vue 的小型应用自带性能优化），但对于对于大型应用而言不太适合（大量的 Watcher 会消耗性能）。
    2.  多数情况下，框架内置的状态管理是不足以支撑大型应用的，Redux 或 Vuex 等状态管理方案是必须使用的。
7.  `语法`
    1.  组件
        1.  react 是类式的写法，api 很少
        2.  而 vue 是声明式的写法，通过传入各种 options，api 和参数都很多。所以 react 结合 typescript 更容易一起写，vue 稍微复杂。

总结：

1.  模板编写
    1.  模板语法
    2.  组件编写
2.  数据监听实现原理
3.  数据状态的管理理念
    1.  状态管理
    2.  渲染模式
    3.  使用场景
