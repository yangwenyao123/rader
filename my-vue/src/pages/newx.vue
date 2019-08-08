<template>
  <div class="hello">
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      orgOptions: {}
    };
  },
  mounted() {
    var echarts = require("echarts");

    var myChart = echarts.init(document.getElementById("main"));
    console.log(myChart);

    myChart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
    //适应页面
    window.onresize = function() {
      myChartContainer();
      myChart.resize();
    };
  }
};
</script>

<style scoped>
.hello {
  width: 280px;
  height: 500px;
}
#main {
  width: 100%;
  height: 100%;
}
</style>