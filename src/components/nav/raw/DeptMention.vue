<template>
  <div class="row">
    <div class="col-lg-6 ">
      <div ref="chart">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeptMention",
  mounted() {
    let pie_chart = this.$echarts.init(this.$refs.chart, null, {
      width: 1200,
      height: 800
    })

    this.$axios
        .get('http://localhost:8082/raw/mention')
        .then(response => {
          let data = response.data.data
          let categoryData = data.deptNameList
          let typeNameList = data.typeNameList

          let seriesList = []
          for (let [index, series] of data.dataList.entries()) {
            let tmp = []
            for (let deptAndCount of series.deptAndCountList) {
              tmp.push(deptAndCount.count)
            }

            seriesList.push({
              stack: '1',
              name: series.typeName,
              type: 'bar',
              barWidth: '60%',
              label: {
                show: false,
                position: 'inside'
              },
              data: tmp
            })

          }

          // 指定图表的配置项和数据
          var option = {
            title: {
              text: '历史总结',
              // subtext: 'Fake Data',
              left: 'center'
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: typeNameList,
              itemHeight: 10, //改变圆圈大小
              icon: 'circle',
              textStyle: {
                color: '#B0CEFC' // 图例文字颜色
              },
              top: "4%"
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
                data: categoryData,
                axisLabel: {
                  rotate: 60
                },
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
            series: seriesList
          };

          pie_chart.setOption(option)
        })
        .catch(function (err) {
          console.log(err)
        })
  }
}
</script>

<style scoped>

</style>