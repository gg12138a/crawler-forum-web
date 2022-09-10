<template>
  <div class="row">
    <div class="col-lg-6 col-lg-offset-1">
      <div ref="chart">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeClassify",
  mounted() {
    let pie_chart = this.$echarts.init(this.$refs.chart, null, {
      width: 900,
      height: 1000
    })
    this.$axios
        .get('http://localhost:8082/raw/typecount')
        .then(response => {
          let source = response.data
          console.log(source)

          let option = {
            title: {
              text: '类别分布',
              // subtext: 'Fake Data',
              left: 'center'
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              orient: 'vertical',
              left: 'left'
            },
            series: [
              {
                name: '类别',
                type: 'pie',
                radius: '50%',
                data: source,
                label: {
                  normal: {
                    formatter: '{b}:{c}' + '\n\r' + '({d}%)',
                    show: true,
                    position: 'left'
                  },
                  emphasis: {
                    show: true,
                    // textStyle: {
                    //     fontSize: '30',
                    //     fontWeight: 'bold'
                    // }
                  }
                },
                labelLine: {
                  normal: {
                    show: true
                  }
                },
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };

          pie_chart.setOption(option)
        })
        .catch(function (err) {
          console.log(err)
        })


  }
}
</script>
