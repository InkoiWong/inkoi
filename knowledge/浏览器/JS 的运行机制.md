## 从 Event Loop 谈 JS 的运行机制

前置概念

1.  JS 引擎线程（单线程）
2.  事件触发线程
3.  定时触发器线程

需要理解的概念

1.  主线程
    1.  stacks 执行栈
2.  其它线程 Web APIs
    1.  DOM API 监听注册事件
    2.  timer 定时任务
    3.  http(ajax) 请求任务
3.  Task Queue 任务队列
    1.  micro task (jobs) 微任务
        1.  process.nextTick
        2.  promise
        3.  Object.observe
        4.  MutationObserver
    2.  macro task (task) 宏任务
        1.  setTimeout
        2.  setInterval
        3.  setImmediate
        4.  I/O
        5.  UI 渲染
4.  Event Loop 事件循环

总结

1.  执行主线程任务，将 script 压入 stacks
2.  遇到 异步任务，根据不同情况，压入 macrotask、或者 microtask
3.  同步执行至`执行栈为空`
4.  每个 macrotask 执行完，需要检查 microtask 中是否有任务，有则在下个 macrotask 执行前，把所有已压入 microtask 的任务全部执行
5.  直到 microtask 没有了，再执行下一个 macrotask
6.  循环至结束
