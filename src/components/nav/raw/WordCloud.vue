<template>
  <div>
    <div class="row">
      <div class="col-lg-8 col-lg-offset-2">
        <h1 class="page-header">热点内容——词云图</h1>

        <label for="month">选择日期：</label>

        <input type="month" id="month" name="start" ref="month"
               min="2015-01" :max="maxMonth" v-model="month">

        <button id="btn" class="btn btn-default" type="button" @click="getUrl">查看此月份的词云图</button>
      </div>
    </div>

    <div class="row">
      <div id="pic_container" class="col-lg-8 col-lg-offset-2">
        <img v-bind:src="imgSrc" alt="词云图" v-if="imgSrc!==''"/>
        <!--                    <img th:src="@{/pictures/wordclouds/ciyun-2022-03.jpg}"/>-->
      </div>
    </div>

    <div id="loading" class="row" v-show="processing">
      <div class="loading text-center" style="margin-top: 15%">
        <svg class="spinner" width="65px" height="65px" viewBox="0 0 66 66"
             xmlns="http://www.w3.org/2000/svg">
          <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33"
                  r="30"></circle>
        </svg>
        <div>
          正在生成中...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WordCloud',
  data() {
    return {
      processing: false,
      maxMonth: '',
      month: '',
      imgSrc: ''
    }
  },
  props: {
    // 例如http://localhost:8082/wordcloud/all
    requestUrl: {
      type: String,
      required: true
    }
  },
  methods: {
    getUrl() {
      let pick_month = this.month;
      let reg = /^\d{4}-\d{2}$/;
      if (reg.test(pick_month)) {

        this.processing = true

        this.$axios
            .get(this.requestUrl, {
              headers: {
                'Content-Type': "application/json;charset=UTF-8",
                'token': this.$store.state.token
              },
              params: {
                date: pick_month
              }
            })
            .then(res => {
              console.log(res.data)
              this.imgSrc = res.data
              this.processing = false
            })
            .catch(function (err) {
              console.log(err)
              this.processing = false
            })

      } else {
        alert("请选择日期!")
      }
    }
  },
  mounted() {
    //得到当前时间
    let date_now = new Date();
    //得到当前年份
    let year = date_now.getFullYear();
    //得到当前月份
    //注：
    //  1：js中获取Date中的month时，会比当前月份少一个月，所以这里需要先加一
    //  2: 判断当前月份是否小于10，如果小于，那么就在月份的前面加一个 '0' ， 如果大于，就显示当前月份
    let month = date_now.getMonth() + 1 < 10 ? "0" + (date_now.getMonth() + 1) : (date_now.getMonth() + 1);
    //得到当前日子（多少号）
    // var date = date_now.getDate() < 10 ? "0"+date_now.getDate() : date_now.getDate();
    //设置input标签的max属性
    // $("#month").attr("max",year+"-"+month+"-"+date);

    this.maxMonth = year + "-" + month;
  }
}
</script>


<style scoped>
div .loading {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  -webkit-animation: rotator 1.4s linear infinite;
  animation: rotator 1.4s linear infinite;
}

@-webkit-keyframes rotator {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(270deg);
  }
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  -webkit-animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
  animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
}

@-webkit-keyframes colors {
  0% {
    stroke: #4285F4;
  }

  25% {
    stroke: #DE3E35;
  }

  50% {
    stroke: #F7C223;
  }

  75% {
    stroke: #1B9A59;
  }

  100% {
    stroke: #4285F4;
  }
}

@keyframes colors {
  0% {
    stroke: #4285F4;
  }

  25% {
    stroke: #DE3E35;
  }

  50% {
    stroke: #F7C223;
  }

  75% {
    stroke: #1B9A59;
  }

  100% {
    stroke: #4285F4;
  }
}

@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 187;
  }

  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 187;
  }

  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
  }

  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
}
</style>
