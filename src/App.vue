<template>
  <div>
    <router-view></router-view>
<!--    <Login></Login>-->
<!--    <Nav></Nav>-->
  </div>
</template>

<script>
import Login from "@/components/Login";
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Login
  }
}

</script>

