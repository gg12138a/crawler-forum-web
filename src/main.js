import Vue from 'vue'
import App from './App.vue'
import router from "@/router";


import $ from 'jquery'
import 'bootstrap'
import '@/assets/bootstrap-3.4.1-dist/css/bootstrap.min.css'
import '@/assets/bootstrap-3.4.1-dist/js/bootstrap.min.js'

window.jQuery = $;
window.$ = $;

import axios from 'axios';

// axios.defaults.withCredentials = true
Vue.prototype.$axios = axios

import echarts from "echarts";

Vue.prototype.$echarts = echarts;

import store from '@/store/index'
import instance from "@/utils/request";

new Vue({
    router: router,
    store,
    render: h => h(App),
}).$mount('#app')