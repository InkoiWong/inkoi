/**
 * @desc  创建监听者（观察者）
 *        劫持监听所有属性
 *
 *        P.S 暂时不讨论对data递归的情况
 */
class Observer {
  /**
   *Creates an instance of Observer.
   * @param {Object} data 传入的就是每个vue里面的data
   */
  constructor(data) {
    this.observe(data);
  }

  /**
   * @desc  进行监听动作
   *        解析数据，完成对数据属性的劫持，控制对象属性的get和set
   *
   *        可被递归使用
   *
   * @param {Object} data 传入的vue的data 或 其子属性（递归情况下）
   */
  observe(data) {
    // 判断数据的有效性（类型必须是对象）
    if (!data || typeof data !== 'object') {
      return;
    } else {
      // 遍历该对象的所有属性
      var keys = Object.keys(data);
      keys.forEach(key => {
        this.defineReactive(data, key, data[key]);
      });
    }
  }
  /**
   * @desc  可观测化包装器
   *        将数据包装成一种可观测的类型reactive data，当数据产生变更的时候，我们能够感知到
   *
   * @param {*} obj 传入的vue的data
   * @param {*} key 被遍历到的data中的属性
   * @param {*} val data中该属性的值
   */
  defineReactive(obj, key, val) {
    // 每一个 reactive data 的创建，都会随着创建一个 `dep 实例`
    var dep = new Dep();

    // var childObj = observe(val);

    Object.defineProperty(obj, key, {
      // 是否可遍历
      enumerable: true,
      // 是否可配置
      configurable: true,
      // 取值方法
      get() {
        // 每次 new 一个 watcher（订阅者）对象的时候需要计算依赖的dep对象，
        // Dep.target 就是当前正在计算依赖的watcher对象

        var curHandlingWatcher = Dep.target;
        if (curHandlingWatcher) {
          // 如果有值，证明这是由 Watcher初始化 的时候调用的get方法

          dep.addSub(curHandlingWatcher);
        }

        return val;
      },
      // 修改值
      set(newValue) {
        val = newValue;

        dep.notify();
      }
    });
  }
}
