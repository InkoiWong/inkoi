/**
 * @desc  创建模板编译器
 */
class Compile {
  constructor(el, vm) {
    // 获取挂载元素
    this.el = document.querySelector(el);
    this.vm = vm;
    this.fragment = null;

    if (this.el) {
      // 将目标node节点的html内容转换成fragment节点片段缓存
      this.fragment = this.node2Fragment(this.el);

      // 编译模板
      this.compile(this.fragment);
      // 将数据放回页面
      this.el.appendChild(this.fragment);
    }
  }

  /* ********************工具方法******************** */
  // 判断元素节点
  isElementNode(node) {
    return node.nodeType === 1;
  }
  // 判断文本节点
  isTextNode(node) {
    return node.nodeType === 3;
  }
  // 类数组转数组
  toArray(fakeArr) {
    return [].slice.call(fakeArr);
  }

  // 判断指令绑定方式
  isDirective(dir) {
    return dir.indexOf('v-') === 0;
  }
  isDirectiveBindOn(dir) {
    return dir.indexOf('on:') === 0;
  }
  isColonDirective(dir) {
    return dir.indexOf(':') === 0;
  }
  isEventDirective(dir) {
    return dir.indexOf('@') === 0;
  }
  /* ********************工具方法******************** */

  /**
   * @desc  将目标node节点的html内容转换成fragment节点片段缓存
   * @param {*} el
   * @returns
   */
  node2Fragment(el) {
    /**
     * @func  document.createDocumentFragment
     * @desc  创建一虚拟的节点对象，节点对象包含所有属性和方法。
     *        可用于提取文档的一部分，改变，增加，或删除某些内容及插入到文档末尾
     */
    var fragment = document.createDocumentFragment();
    var child;
    // 通过循环把 node的每个节点 都提取到 fragment 中
    while ((child = el.firstChild)) {
      fragment.appendChild(child);
    }

    return fragment;
  }

  /**
   * @desc  编译模板方法
   * @param {*} el
   */
  compile(el) {
    var childNodes = el.childNodes;
    var arr = this.toArray(childNodes);
    arr.forEach(node => {
      // 根据不同的节点类型，分别解析指令

      // 找到我们需要的节点进行解析
      if (this.isElementNode(node)) {
        // 元素节点
        this.compileElementNode(node);
      } else if (this.isTextNode(node)) {
        // 文本节点

        // 再判断是否我们的目的节点
        // 如 vue 所定义的 {{ aaa }} 这种格式
        var reg = /\{\{\s(.*)\s\}\}/;
        var text = node.textContent;

        reg.test(text) ? this.compileTextNode(node, reg.exec(text)[1]) : null;
      }

      // 递归遍历
      if (node.childNodes && node.childNodes.length) {
        this.compile(node);
      }
    });
  }

  // 编译元素节点
  compileElementNode(node) {
    var attrs = this.toArray(node.attributes);

    if (!attrs || attrs.length <= 0) {
      return;
    }

    // 遍历当前元素所有属性
    attrs.forEach(attr => {
      var attrName = attr.name;

      // 用户判断是否命中我们需要解析的属性
      var hit = false;

      // 通过 v- 绑定属性
      // v-model、v-text、v-on:click
      if (this.isDirective(attrName)) {
        // 提取 绑定字段
        var dir = attrName.substring(2);
        var exp = attr.value;

        if (this.isDirectiveBindOn(dir)) {
          // v-on:click

          var eventDir = dir.substring(3);
          this.Compiler['event'](node, eventDir, exp);
        } else {
          // v-model、v-text

          switch (dir) {
            case 'text':
              this.Compiler['text'](node, exp);
              break;
            case 'model':
              this.Compiler['model'](node, exp);
              break;
          }
        }

        hit = true;
      }

      // 通过 : 方式绑定属性
      // :value
      if (this.isColonDirective(attrName)) {
        // 提取 绑定字段
        var dir = attrName.substring(1);
        var exp = attr.value;

        switch (dir) {
          case 'value':
            this.Compiler['model'](node, exp);
            break;
        }

        hit = true;
      }

      // 通过 @ 方式绑定属性
      // @click
      if (this.isEventDirective(attrName)) {
        // 提取 绑定字段
        var dir = attrName.substring(1);
        var exp = attr.value;

        this.Compiler['event'](node, dir, exp);

        hit = true;
      }

      // 可选
      // 如果不想在编译后的html中看到vue代码，则可以删除命中的属性
      if (hit) {
        node.removeAttribute(attrName);
      }
    });
  }
  // 编译文本节点
  compileTextNode(node, exp) {
    this.Compiler['text'](node, exp);
  }

  /* ********************指令解析******************** */
  Compiler = {
    /**
     * @desc  用于解析使用'文本模板'的指令
     *        'v-text' 和 {{}}
     *
     *        初次渲染的时候执行一次
     *        然后再订阅者处订阅一次，这样就能保证每次更新都会渲染
     */
    text: (node, exp) => {
      var _this = this;
      var initText = this.vm.$data[exp];

      this.Updater['text'](node, initText);
      new Watcher(this.vm, exp, function(value) {
        _this.Updater['text'](node, value);
      });
    },
    /**
     * @desc  用于解析使用'模型模板'的指令
     *        'v-model' 和 ':value'
     *
     *        初次渲染的时候执行一次
     *        然后再订阅者处订阅一次，这样就能保证每次更新都会渲染
     */
    model: (node, exp) => {
      var _this = this;
      var val = this.vm.$data[exp];

      this.Updater['model'](node, val);
      new Watcher(this.vm, exp, function(value) {
        _this.Updater['model'](node, value);
      });

      node.addEventListener('input', function(e) {
        var newValue = e.target.value;
        if (val === newValue) {
          return;
        }
        _this.vm.$data[exp] = newValue;
        val = newValue;
      });
    },
    /**
     * @desc  用于解析使用'操作绑定'的指令
     *        '@click'
     *
     * @param   dir   指令符--eventName
     * @param   exp   描述符--methodName
     */
    event: (node, dir, exp) => {
      var cb = this.vm.$methods && this.vm.$methods[exp];

      if (cb) {
        node.addEventListener(dir, cb.bind(this.vm), false);
      } else {
        console.log(`未定义${exp}函数`);
      }
    }
  };
  /* ********************指令解析******************** */

  /* ********************渲染更新******************** */
  Updater = {
    text: (node, value) => {
      node.textContent = typeof value == 'undefined' ? '' : value;
    },
    model: (node, value) => {
      node.value = typeof value == 'undefined' ? '' : value;
    }
  };
  /* ********************渲染更新******************** */
}
