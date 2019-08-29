<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-pie-chart"></i> 图表-柱状图 echarts-bar</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="plugins-tips">
        访问地址：<a
          href="https://echarts.baidu.com/examples/index.html#chart-type-bar"
          target="_blank"
        >echarts-bar</a>
      </div>
      <div class="chart-box">
        <div class="tit">类型1</div>
        <div
          id="chart1"
          style="width:300px; height:300px;"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'echartsBar',
  data: () => ({
    option1: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }]
    }
  }),
  methods: {
    initChart () {
      let chart1 = this.$echarts.init(document.getElementById('chart1'))
      chart1.setOption(this.option1)
    }
  },

  mounted () {
    this.initChart()
  }
}
</script>

<style scoped>
</style>