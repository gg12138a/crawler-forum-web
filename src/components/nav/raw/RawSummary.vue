<template>
  <div>
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <div ref="chart">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  mounted() {
    let pie_chart = this.$echarts.init(this.$refs.chart, null, {
      width: 700,
      height: 800
    })

    this.$axios
        .get('http://localhost:8082/raw/summary')
        .then(response => {
          let data = response.data
          let labelArr = []
          let dataArr = []

          for (let dto of data) {
            labelArr.push(dto.statusName)
            dataArr.push(dto.count)
          }


          // 指定图表的配置项和数据
          let option = {
            title: {
              text: '所有部门事务处理总结',
              // subtext: 'Fake Data',
              left: 'center'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            grid: {
              left: '3%',
              right: '3%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [
              {
                type: 'category',
                data: labelArr,
                axisTick: {
                  alignWithLabel: true
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '数量',
                type: 'bar',
                barWidth: '60%',
                label: {
                  show: true,
                  position: 'inside'
                },
                data: dataArr
              }
            ]
          }

          pie_chart.setOption(option)
        })
        .catch(function (err) {
          console.log(err)
        })
  }
}
</script>