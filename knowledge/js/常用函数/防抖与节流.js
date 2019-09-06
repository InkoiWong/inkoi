/**
 * @title 防抖函数
 * @description 将一段时间内的多次操作合并为一次，在最后一次触发后，经过delay时间，才实际调用callback
 *
 * @param  {Function} callback      目标执行的函数
 * @param  {Number}   delay         毫秒数，延迟执行的时间，可自定义默认值
 */
var debounce = function(callback, delay) {
  var timer = null;
  delay = delay || 300;

  return function() {
    var self = this;
    var args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      callback.apply(self, args);
    }, delay);
  };
};

/**
 * @title 节流函数
 * @description 使得一定时间内只触发一次函数
 *
 * @param  {Function} callback      目标执行的函数
 * @param  {Number}   delay         毫秒数，时间内最多只执行一次，可自定义默认值
 */
var throttle = function(callback, delay) {
  var timer = null;
  delay = delay || 1000;

  return function() {
    var context = this;
    var args = arguments;
    if (!timer) {
      timer = setTimeout(function() {
        callback.apply(context, args);
        timer = null;
      }, delay);
    }
  };
};
