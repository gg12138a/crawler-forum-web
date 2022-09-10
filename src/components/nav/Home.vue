<template>
  <div class=" background">
    <div class="text-center middle" >
      <p class="text-info" style="font-size: 100px;">城市论坛后台管理系统</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.background {
  background: url('~@/assets/bg.jpg')  center center;

  width:100%;
  height:80%;  /**宽高100%是为了图片铺满屏幕 **/

  position: fixed;

  z-index:-1;
}

.middle{
  padding-top: 15%;
}


</style>
