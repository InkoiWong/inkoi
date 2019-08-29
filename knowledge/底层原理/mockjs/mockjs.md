# Mockjs

https://blog.csdn.net/u011500781/article/details/79513946

## 功能

拦截 http 请求，模拟接口返回数据，实现本地请求服务，达到前后端分离

## 底层原理

1.  覆盖请求方法（ajax、axios 等），拦截请求，再调用自己实现的请求方法
2.  去匹配将被拦截的请求地址
3.  拦截了请求之后，把预先准备好的数据当做请求成功后的数据

## 模拟实现

```js
let Mock = {
  // 存储匹配规则，即url与data相对应
  rules: new Map(),
  // 缓存ajax方法
  ajax: $.ajax,
  mock(url, data) {
    this.rules.set(url, data);
  }
};

// 改写ajax方法
$.ajax = function(options) {
  Mock.ajax({
    url: options.url,
    beforeSend(XHR) {
      let data = Mock.rules.get(options.url);
      // 找到规则拦截请求，并执行回调(return false时会拦截请求)
      data && options.success(data);
      return !data;
    },
    success(data) {
      // 找不到规则，正常发送请求
      options.success(data);
    }
  });
};

// 测试
Mock.mock('/a', {
  a: 1,
  b: 2
});
$.ajax({
  url: '/a',
  success(data) {
    console.log(data, 1);
  }
});
$.ajax({
  url: '/b',
  success(data) {
    console.log(data, 2);
  }
});
```
