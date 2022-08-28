import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/components/Home'
import Notice from '@/components/Notice'
import Summary from "@/components/Summary";


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/notice', component: Notice},
        {path: '/summary', component: Summary}
    ]
})

export default router