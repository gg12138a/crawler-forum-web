<template>
  <div id="wrapper" :class="{'toggled':!isClosed}">
    <div ref="overlay" class="overlay" :style="{display:(isClosed?'none':'block')}"></div>

    <!-- Sidebar -->
    <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
      <ul class="nav sidebar-nav">

        <li>
          <router-link to="/nav/home" @click.native="hamburger_cross"><i class="fa fa-fw fa-home"></i> Home</router-link>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-plus"></i>
            {{ this.deptName }}-部门数据展示
            <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li>
              <router-link to="/nav/dept/notice" @click.native="hamburger_cross">消息通知</router-link>
            </li>
            <li>
              <router-link to="/nav/dept/summary" @click.native="hamburger_cross">工作总结</router-link>
            </li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-fw fa-plus"></i> 原始数据展示
            <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li>
              <router-link to="/nav/raw/notice" @click.native="hamburger_cross">热门帖子</router-link>
            </li>
            <li>
              <router-link to="/nav/raw/summary" @click.native="hamburger_cross">事务处理总结</router-link>
            </li>
            <li>
              <router-link to="/nav/raw/mention" @click.native="hamburger_cross">部门提及次数</router-link>
            </li>
            <li>
              <router-link to="/nav/raw/summary" @click.native="hamburger_cross">主题分布（筛选）</router-link>
            </li>
            <li>
              <router-link to="/nav/raw/summary" @click.native="hamburger_cross">类别分布与受理情况</router-link>
            </li>
            <li>
              <router-link to="/nav/raw/wordCloud" @click.native="hamburger_cross">查看词云图</router-link>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <button type="button" ref="trigger"
              class="hamburger is-closed animated fadeInLeft" data-toggle="offcanvas"
              :class="{'is-open':!isClosed,'is-close':isClosed}"
              @click="hamburger_cross">
        <span class="hamb-top"></span>
        <span class="hamb-middle"></span>
        <span class="hamb-bottom"></span>
      </button>
      <div class="container">
        <!--        <div class="row">-->
        <!--          <div class="col-lg-8 col-lg-offset-2">-->

        <!--主要内容-->
        <router-view></router-view>

        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->
</template>


<script>
import 'bootstrap/dist/js/bootstrap.min.js'
import {mapState} from "vuex";

export default {
  name: 'Nav',
  data() {
    return {
      isClosed: true
    }
  },
  methods: {
    hamburger_cross() {
      this.isClosed = !this.isClosed
    }
  },
  computed: {
    ...mapState(["deptName"])
  }
}

</script>

<style scoped>
/*@import "@/assets/font-awesome-4.7.0/css/font-awesome.min.css";*/
/*@import "@/assets/bootstrap-3.4.1-dist/css/bootstrap.min.css";*/

/*-------------------------------*/
/*           VARIABLES           */
/*-------------------------------*/
body {
  position: relative;
  overflow-x: hidden;
}

body,
html {
  height: 100%;
  background-color: #583e7e;
}

.nav .open > a {
  background-color: transparent;
}

.nav .open > a:hover {
  background-color: transparent;
}

.nav .open > a:focus {
  background-color: transparent;
}

/*-------------------------------*/
/*           Wrappers            */
/*-------------------------------*/
#wrapper {
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  padding-left: 0;
  transition: all 0.5s ease;
}

#wrapper.toggled {
  padding-left: 220px;
}

#wrapper.toggled #sidebar-wrapper {
  width: 220px;
}

#wrapper.toggled #page-content-wrapper {
  margin-right: -220px;
  position: absolute;
}

#sidebar-wrapper {
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  background: #1a1a1a;
  height: 100%;
  left: 220px;
  margin-left: -220px;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.5s ease;
  width: 0;
  z-index: 1000;
}

#sidebar-wrapper::-webkit-scrollbar {
  display: none;
}

#page-content-wrapper {
  padding-top: 70px;
  width: 100%;
}

/*-------------------------------*/
/*     Sidebar nav styles        */
/*-------------------------------*/
.sidebar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: 220px;
}

.sidebar-nav li {
  display: inline-block;
  line-height: 20px;
  position: relative;
  width: 100%;
}

.sidebar-nav li:before {
  background-color: #1c1c1c;
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 3px;
  z-index: -1;
}

.sidebar-nav li:first-child a {
  background-color: #1a1a1a;
  color: #ffffff;
}

.sidebar-nav li:nth-child(2):before {
  background-color: #402d5c;
}

.sidebar-nav li:nth-child(3):before {
  background-color: #4c366d;
}

.sidebar-nav li:nth-child(4):before {
  background-color: #583e7e;
}

.sidebar-nav li:nth-child(5):before {
  background-color: #64468f;
}

.sidebar-nav li:nth-child(6):before {
  background-color: #704fa0;
}

.sidebar-nav li:nth-child(7):before {
  background-color: #7c5aae;
}

.sidebar-nav li:nth-child(8):before {
  background-color: #8a6cb6;
}

.sidebar-nav li:nth-child(9):before {
  background-color: #987dbf;
}

.sidebar-nav li:hover:before {
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 100%;
}

.sidebar-nav li a {
  color: #dddddd;
  display: block;
  padding: 10px 15px 10px 30px;
  text-decoration: none;
}

.sidebar-nav li.open:hover before {
  -webkit-transition: width 0.2s ease-in;
  transition: width 0.2s ease-in;
  width: 100%;
}

.sidebar-nav .dropdown-menu {
  background-color: #222222;
  border-radius: 0;
  border: none;
  box-shadow: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
}

.sidebar-nav li a:hover,
.sidebar-nav li a:active,
.sidebar-nav li a:focus,
.sidebar-nav li.open a:hover,
.sidebar-nav li.open a:active,
.sidebar-nav li.open a:focus {
  background-color: transparent;
  color: #ffffff;
  text-decoration: none;
}

.sidebar-nav > .sidebar-brand {
  font-size: 20px;
  height: 65px;
  line-height: 44px;
}

/*-------------------------------*/
/*       Hamburger-Cross         */
/*-------------------------------*/
.hamburger {
  background: transparent;
  border: none;
  display: block;
  height: 32px;
  margin-left: 15px;
  position: fixed;
  top: 20px;
  width: 32px;
  z-index: 999;
}

.hamburger:hover {
  outline: none;
}

.hamburger:focus {
  outline: none;
}

.hamburger:active {
  outline: none;
}

.hamburger.is-closed:before {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  color: #000000;
  content: '';
  display: block;
  font-size: 14px;
  line-height: 32px;
  opacity: 0;
  text-align: center;
  width: 100px;
}

.hamburger.is-closed:hover before {
  -webkit-transform: translate3d(-100px, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  display: block;
  opacity: 1;
}

.hamburger.is-closed:hover .hamb-top {
  -webkit-transition: all 0.35s ease-in-out;
  top: 0;
}

.hamburger.is-closed:hover .hamb-bottom {
  -webkit-transition: all 0.35s ease-in-out;
  bottom: 0;
}

.hamburger.is-closed .hamb-top {
  -webkit-transition: all 0.35s ease-in-out;
  background-color: rgba(0, 0, 0, 0.7);
  top: 5px;
}

.hamburger.is-closed .hamb-middle {
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: -2px;
  top: 50%;
}

.hamburger.is-closed .hamb-bottom {
  -webkit-transition: all 0.35s ease-in-out;
  background-color: rgba(0, 0, 0, 0.7);
  bottom: 5px;
}

.hamburger.is-closed .hamb-top,
.hamburger.is-closed .hamb-middle,
.hamburger.is-closed .hamb-bottom,
.hamburger.is-open .hamb-top,
.hamburger.is-open .hamb-middle,
.hamburger.is-open .hamb-bottom {
  height: 4px;
  left: 0;
  position: absolute;
  width: 100%;
}

.hamburger.is-open .hamb-top {
  -webkit-transform: rotate(45deg);
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
  background-color: #000000;
  margin-top: -2px;
  top: 50%;
}

.hamburger.is-open .hamb-middle {
  background-color: #020000;
  display: none;
}

.hamburger.is-open .hamb-bottom {
  -webkit-transform: rotate(-45deg);
  -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
  background-color: #030000;
  margin-top: -2px;
  top: 50%;
}

.hamburger.is-open:before {
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  color: #000000;
  content: '';
  display: block;
  font-size: 14px;
  line-height: 32px;
  opacity: 0;
  text-align: center;
  width: 100px;
}

.hamburger.is-open:hover before {
  -webkit-transform: translate3d(-100px, 0, 0);
  -webkit-transition: all 0.35s ease-in-out;
  display: block;
  opacity: 1;
}

/*-------------------------------*/
/*          Dark Overlay         */
/*-------------------------------*/
.overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

/* SOME DEMO STYLES - NOT REQUIRED */
body,
html {
  background-color: #ffffff;
}
</style>