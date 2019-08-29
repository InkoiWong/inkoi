import Vue from 'vue';

// import echarts from 'echarts'; // 直接引入2.4MB
// import echarts from 'echarts/lib/echarts'; // 按需引入61KB

// 再引入你需要使用的图表类型，标题，提示信息等
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/title';

// babel-plugin-equire
// eslint-disable-next-line
const echarts = equire(['bar', 'legend', 'title']);

Vue.prototype.$echarts = echarts;
