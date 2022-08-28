import Vue from 'vue'
import App from './App.vue'
import router from "@/router";


import $ from 'jquery'
import 'bootstrap'
import '@/assets/bootstrap-3.4.1-dist/css/bootstrap.min.css'
import '@/assets/bootstrap-3.4.1-dist/js/bootstrap.min.js'
window.jQuery = $;
window.$ = $;


new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')