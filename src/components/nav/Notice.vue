<template>
  <div>
    <div class="row">
      <div class="col-lg-10 col-lg-offset-1">
        <h1 class="page-header">消息通知</h1>
        <table class="table table-hover table-striped">
          <thead>
          <tr>
            <th>标题</th>
            <th>类别</th>
            <th>相关部门</th>
            <th>查看数</th>
            <th>回复数</th>
            <th>发布者</th>
            <th>发布日期</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="post in this.pageinfo.list">
            <td><a :href="'http://bbs.zhoushan.cn/thread-'+post.postId+'-1-1.html'">{{ post.title }}</a></td>
            <td>{{ post.typeName }}</td>
            <td>{{ post.deptName }}</td>
            <td>{{ post.checkCount }}</td>
            <td>{{ post.replyCount }}</td>
            <td>{{ post.publisherName }}</td>
            <td>{{ post.publishDate }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 分页条 -->
    <div class="row">
      <div class="col-lg-5 col-lg-offset-2">
        当前{{ pageinfo.pageNum }}页，总{{ pageinfo.pages }}页，共{{ pageinfo.total }}条记录
      </div>
      <div class="col-lg-5 col-lg-offset-1">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <!--首页-->
            <li class="disabled" v-if="pageinfo.pageNum===1">
              <a>首页</a>
            </li>
            <li v-else>
              <a @click="send(1)">首页</a>
            </li>

            <!--上一页-->
            <li v-if="pageinfo.hasPreviousPage">
              <a @click="send(pageinfo.prePage)"><span aria-hidden="true">&laquo;</span></a>
            </li>

            <!--中间页码-->
            <template v-for="i in pageinfo.navigatepageNums">
              <li v-if="i === pageinfo.pageNum" class="disabled">
                <a>{{ i }}</a>
              </li>
              <li v-else>
                <a @click="send(i)">{{ i }}</a>
              </li>
            </template>

            <!--下一页-->
            <li v-if="pageinfo.hasNextPage">
              <a @click="send(pageinfo.nextPage)"><span aria-hidden="true">&raquo;</span></a>
            </li>

            <!--末页-->
            <li v-if="pageinfo.pageNum < pageinfo.pages">
              <a @click="send(pageinfo.pages)">末页</a>
            </li>
            <li v-else class="disabled">
              <a>末页</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Notice',
  data() {
    return {
      pageinfo: {
        post: {
          typeName: null,
          deptName: null,
          checkCount: null,
          replyCount: null,
          publisherName: null,
          publishDate: null
        },
        pageNum: null,
        pages: null,
        total: null,
        hasPreviousPage: null,
        prePage: null,
        navigatepageNums: null,
        hasNextPage: null,
        nextPage: null
      }
    }
  },
  methods: {
    send(page) {
      this.$axios
          .get('http://localhost:8082/notice/' + page)
          .then(response => {
            this.pageinfo = response.data
            console.log(this.pageinfo)
          })
          .catch(function (err) {
            console.log(err)
          })
    }
  },
  mounted() {
    this.send(1)
  }
}
</script>
