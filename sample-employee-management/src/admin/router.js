import Vue from 'vue'
import Router from 'vue-router'
import store from './store';
import MainLayout from "../shared/components/MainLayout.vue";
import PageLogin from "./views/PageLogin";
import PageMain from "./views/PageMain";
import PageMyInfo from "./views/PageMyInfo.vue";
import PageEmployeeEdit from "./views/PageEmployeeEdit.vue";
import PageEmployeeAdd from "./views/PageEmployeeAdd.vue";
import PageTeamManage from "./views/PageTeamManage.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "",
            beforeEnter: (to, from, next) => {
                console.log(store.state);
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
                {
                    path: "/edit",
                    component: PageEmployeeAdd
                },
                {
                    path: "/edit/:accountId",
                    component: PageEmployeeEdit
                },
                {
                    path: "/department",
                    component: PageTeamManage
                }
            ]
        },

        {
            path: "/login",
            component: PageLogin
        }
    ]
})
