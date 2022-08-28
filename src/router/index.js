import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/components/nav/Home'
import Notice from '@/components/nav/Notice'
import Summary from "@/components/nav/Summary";


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/notice', component: Notice},
        {path: '/summary', component: Summary}
    ]
})

export default router