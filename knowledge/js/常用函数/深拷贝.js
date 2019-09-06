// https://www.jqhtml.com/16976.html
// https://www.jianshu.com/p/b084dfaad501

// 限制型使用
function deepClone(obj) {
  // 只能用于复制由基本数据类型嵌套的对象

  // 对于以下无法实现
  // 1.如果obj里面有时间对象，则JSON.stringify后再JSON.parse的结果，时间将只是字符串的形式。而不是时间对象；
  // 2.RegExp、Error变成空对象{}
  // 3.如果obj里有function、undefined，则序列化的结果会把函数或 undefined丢失；
  // 4.如果obj里有NaN、Infinity和-Infinity，则序列化的结果会变成null
  // 5.JSON.stringify()只能序列化对象的可枚举的自有属性，例如 如果obj中的对象是有构造函数生成的， 则使用JSON.parse(JSON.stringify(obj))深拷贝后，会丢弃对象的constructor；
  // 6.如果对象中存在循环引用的情况也无法正确实现深拷贝；

  return JSON.parse(JSON.stringify(obj));
}
function deepClone(obj) {
  // 一级深拷贝，二级浅拷贝
  return Object.assign({}, ...obj);
}
function deepClone(obj) {
  // 一级深拷贝，二级浅拷贝
  return { ...obj };
}

// 原生实现
function deepClone(data) {
  var type = Object.prototype.toString
    .call(data)
    .slice(8, -1)
    .toLocaleLowerCase();

  var copy;
  if (type === 'array' || type === 'object') {
    copy = type === 'array' ? [] : {};

    for (var key in data) {
      copy[key] = deepClone(data[key]);
    }
  } else {
    // 不再具有下一层次
    return data;
  }

  return copy;
}
