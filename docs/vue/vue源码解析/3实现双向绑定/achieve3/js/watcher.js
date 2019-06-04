/**
 * @desc  创建订阅者
 */
class Watcher {
  /**
   *Creates an instance of Watcher.
   * @param {*} vm    全局vm对象
   * @param {*} exp   订阅的节点
   *                  v-model、v-text、:value、{{}}等方法所关联的节点
   * @param {*} cb    发布更新时需要做的回调函数
   *                  在 Dep 的 notify 方法中被触发
   */
  constructor(vm, exp, cb) {
    // 缓存重要属性
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;

    // 将自己添加到Dep订阅器的操作
    this.value = this.get();
  }

  get() {
    // Dep.target 是一个在全局缓存的量
    // 用于证明现在正在处理计算依赖的 Watcher 是自己
    // 当处理完毕（即已添加进Dep管理器中）后，再将其去掉

    // 缓存自己
    Dep.target = this;
    // 通过'获取当前值'强制执行 Observer监听器 里的get函数
    var value = this.vm.$data[this.exp];
    // 释放全局中的缓存
    Dep.target = null;

    return value;
  }
  /**
   * @desc      发布更新时需要做的事情
   *            当有修改时才执行
   *
   * @important 所以这里就是实现vue只更新被修改的数据节点的关键
   */
  update() {
    var newValue = this.vm.$data[this.exp];
    var oldValue = this.value;

    // 当判断有更改
    if (oldValue !== newValue) {
      // 更新当前值
      this.value = newValue;
      // 执行回调
      this.cb(newValue);
    }
  }
}
