/**
 * @desc  订阅者管理器
 *        用于储存 订阅者依赖：addSub
 *        和集体发布更新：notify
 */
class Dep {
  constructor() {
    // 用于储存所有 订阅者依赖 的数组

    this.subs = [];
  }

  /**
   * @desc  添加订阅
   *        每新建一个Watcher，就往管理器中添加一个依赖
   *
   * @param sub 其实就是watcher对象
   */
  addSub(sub) {
    this.subs.push(sub);
  }
  /**
   * @desc  集体发布更新
   *        更新所有在管理器中添加过依赖的watcher
   */
  notify() {
    this.subs.forEach(sub => {
      sub.update();
    });
  }
}
