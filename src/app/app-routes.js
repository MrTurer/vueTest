import {createRouter, createWebHashHistory} from 'vue-router'
// Роуты функциональных модулей
import Home from "@/app/modules/Home/Home";
import {routes as perechenMer} from '@/app/modules/MeasuresTtrStd/router/index'
import {routes as memberNavigator} from '@/app/modules/MemberNavigator/router/index'
import {routes as marketAccessRoutes} from '@/app/modules/MarketsAccess/router/index'
import {routes as internationalTrade} from '@/app/modules/InternationalTrade/router/index'
import {
    routes as authRoutes,
    registerGuards as registerAuthGuards,
} from "@/app/modules/auth/router/index";

const routes = [
    { path: '/', component: Home },
    ...authRoutes,
    ...perechenMer,
    ...memberNavigator,
    ...marketAccessRoutes,
    ...internationalTrade,
];

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes,
});

registerAuthGuards(router);

export default router;