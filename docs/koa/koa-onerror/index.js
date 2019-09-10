// koa-onerror用于格式化异常情况的页面输出。用法：

const onerror = require('koa-onerror');
const koa = require('koa');

const app = koa();
onerror(app);
