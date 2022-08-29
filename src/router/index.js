import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/components/nav/Home'
import Notice from '@/components/nav/Notice'
import Summary from "@/components/nav/Summary";
import Login from "@/components/Login";
import Nav from "@/components/Nav";


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: Login},
        {path: '/nav', component: Nav},
        {path: '/home', component: Home, meta: {auth: true}},
        {path: '/notice', component: Notice, meta: {auth: true}},
        {path: '/summary', component: Summary, meta: {auth: true}}
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/logout') {
        localStorage.removeItem('token')
        return next('/login')
    }


    if (to.path === '/login' || to.path === '/register' || to.path === '/') {
        next()
    } else {
        let accountToken = localStorage.getItem('token');
        console.log("token为：" + accountToken);
        if (accountToken == null || accountToken === '') {
            alert("没有权限，请重新登录");
            return next('/login');
        } else {
            next();
        }
    }
})

export default router