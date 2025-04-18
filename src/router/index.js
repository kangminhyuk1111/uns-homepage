// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ProductsOverview from '../views/templates/ProductsOverview.vue';
import Home from "@/components/main/Home.vue";

// 제품 상세 페이지 동적으로 불러오기
const BaroPaper = () => import('../views/products/BaroPaper.vue');
const BaroPop = () => import('../views/products/BaroPop.vue');
const BaroKiosk = () => import('../views/products/BaroKiosk.vue');
const BaroNavi = () => import('../views/products/BaroNavi.vue');
const BaroSafe = () => import('../views/products/BaroSafe.vue');
const BaroChart = () => import('../views/products/BaroChart.vue');
const BaroTalk = () => import('../views/products/BaroTalk.vue');
const BaroCall = () => import('../views/products/BaroCall.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsOverview
    },
    {
        path: '/products/baro-paper',
        name: 'BaroPaper',
        component: BaroPaper
    },
    {
        path: '/products/baro-pop',
        name: 'BaroPop',
        component: BaroPop
    },
    {
        path: '/products/baro-kiosk',
        name: 'BaroKiosk',
        component: BaroKiosk
    },
    {
        path: '/products/baro-navi',
        name: 'BaroNavi',
        component: BaroNavi
    },
    {
        path: '/products/baro-safe',
        name: 'BaroSafe',
        component: BaroSafe
    },
    {
        path: '/products/baro-chart',
        name: 'BaroChart.vue',
        component: BaroChart
    },
    {
        path: '/products/baro-talk',
        name: 'BaroTalk.vue',
        component: BaroTalk
    },
    {
        path: '/products/baro-call',
        name: 'BaroCall',
        component: BaroCall
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // 페이지 이동 시 항상 맨 위로 스크롤
        return { top: 0 }
    }
});

export default router;