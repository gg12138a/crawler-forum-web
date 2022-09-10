import Vue from "vue";
import VueRouter from "vue-router";

import Home from '@/components/nav/Home'
import DeptNotice from '@/components/nav/dept/DeptNotice'
import DeptSummary from "@/components/nav/dept/DeptSummary";
import Login from "@/components/Login";
import Nav from "@/components/Nav";
import RawtNotice from "@/components/nav/raw/RawtNotice";
import RawSummary from "@/components/nav/raw/RawSummary";
import DeptMention from "@/components/nav/raw/DeptMention";
import WordCloud from "@/components/nav/raw/WordCloud";
import TypeClassify from "@/components/nav/raw/TypeClassify";
import ComplainNotice from "@/components/nav/compliants/ComplainNotice";
import ComplainMention from "@/components/nav/compliants/ComplainMention";
import ComplainStatus from "@/components/nav/compliants/ComplainStatus";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/', redirect: '/login'
        },
        {
            path: '/login', component: Login
        },
        {
            path: '/nav', component: Nav, meta: {auth: true}, children: [
                {
                    path: 'home', component: Home
                },
                {
                    path: 'dept', component: {render: (e) => e("router-view")},
                    children: [
                        {path: 'notice', component: DeptNotice},
                        {path: 'summary', component: DeptSummary},
                    ]
                },
                {
                    path: 'raw', component: {render: (e) => e("router-view")},
                    children: [
                        {path: 'notice', component: RawtNotice},
                        {path: 'summary', component: RawSummary},
                        {path: 'mention', component: DeptMention},
                        {path: 'classify', component: TypeClassify},
                        {
                            path: 'wordCloud',
                            component: WordCloud,
                            props: {requestUrl: 'http://localhost:8082/wordcloud/all'}
                        }
                    ]
                },
                {
                    path: 'complain', component: {render: (e) => e("router-view")},
                    children: [
                        {path: 'notice',component: ComplainNotice},
                        {path: 'mention',component: ComplainMention},
                        {path: 'status',component: ComplainStatus},
                        {
                            path: 'wordCloud',
                            component: WordCloud,
                            props: {requestUrl: 'http://localhost:8082/wordcloud/complain'}
                        }
                    ]
                }
            ]
        },
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
        // console.log("token为：" + accountToken);
        if (accountToken == null || accountToken === '') {
            alert("没有权限，请重新登录");
            return next('/login');
        } else {
            next();
        }
    }
})

export default router