class MVVM {
  constructor(options) {
    var _this = this;

    // 缓存重要属性，alias转换
    this.$vm = this;
    this.$el = options.el;
    this.$data = options.data;
    this.$methods = options.methods;

    // 视图必须存在
    if (this.$el) {
      // 将data挂载到vm上
      Object.keys(this.$data).forEach(function(keyName) {
        _this.proxyKeys(keyName);
      });
      // 将methods挂载到vm上
      Object.keys(this.$methods).forEach(function(methodName) {
        _this[methodName] = _this.$methods[methodName];
      });

      // 添加属性观察对象（实现数据劫持）
      new Observer(this.$data);
      // 创建模板编译器，来解析视图
      new Compile(this.$el, this.$vm);
    }
  }

  /**
   * @desc            将data的属性挂载到vm上
   * @param {*} keyName   传入的是data的各个属性，举例：dataAAA
   *
   *                  这样就可以在各个地方直接调用 this.dataAAA
   */
  proxyKeys(keyName) {
    var _this = this;

    Object.defineProperty(this, keyName, {
      enumerable: true,
      configurable: true,
      get: function getter() {
        return _this.$data[keyName];
      },
      set: function setter(newVal) {
        _this.$data[keyName] = newVal;
      }
    });
  }
}
