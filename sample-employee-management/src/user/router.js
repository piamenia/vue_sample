import Vue from 'vue'
import Router from 'vue-router'
import store from './store';
import MainLayout from "../shared/components/MainLayout.vue";
import PageLogin from "./views/PageLogin";
import PageMain from "./views/PageMain";
import PageMyInfo from "./views/PageMyInfo.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "",
            beforeEnter: (to, from, next) => {
                if (store.state.coreModule.currentEmployee === undefined) {
                    alert("Login is required!!");
                    next("/login");
                    return;
                }
                next();
            },
            component: MainLayout,
            children: [
                {
                    path: "",
                    redirect: "/login",
                },
                {
                    path: "/main",
                    component: PageMain
                },
                {
                    path: "/my",
                    component: PageMyInfo
                },
            ]
        },

        {
            path: "/login",
            component: PageLogin
        }
    ]
})
