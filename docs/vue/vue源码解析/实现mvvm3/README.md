# simple-Vue

#### Compile.js 是模本解析器，用来解析{{text}}，v-text="test"或者 v-model='test'等指令

#### watcher.js 文件是创建订阅者，即上述的指令都会创建一个订阅者，上述的三个指令创建三个订阅者，放到属于 test 这个属性的发布者中，每当 test 属性更新，就会通知所有的订阅者，更新自己。

#### observer.js 是创建观察者，功能就是劫持 vue 的 data 中的数据，使用 getter 和 setter,协调什么时候添加订阅者，什么时候让发布者通知订阅者

#### vue 发布订阅.png 是整个发布订阅的流程图

#### 如果想进一步了解实现过程，可以看这篇博客https://www.cnblogs.com/zhenfei-jiang/p/7542900.html
