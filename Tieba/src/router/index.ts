import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw} from 'vue-router'
// : 声明一个类型 RouteRecordRaw 一个route 类型 RouteRecordRaw[] route数组
const rootRoutes :RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'Home',
        meta:{
            title: '首页',
            cache:true
        },
        component: () => import('@/views/Home/Home.vue')
    },
    {
        path: 'assistant',
        name: 'Assistant',
        meta:{
            title: 'ai助手',
            cache:true
        },
        component: () => import('@/views/Assistant/Assistant.vue')
    },
    {
        path:'message',
        name: 'Message',
        meta:{
            title: '消息',
            cache:true
        },
        component: () => import('@/views/Message/Message.vue')
    },
    {
        path:'mine',
        name: 'Mine',
        meta:{
            title: '个人中心',
            cache:false
        },
        component: () => import('@/views/My/Mine.vue')
    }

]

const routes :RouteRecordRaw[] = [
    {
        path: '/',
        name: 'App',
        component: () => import('@/views/KeepAlive.vue'),
        redirect: '/home',
        children: rootRoutes
    },
    {
        path:'/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next)=>{
    
    document.title = to.meta.title as string;
    next()

})

export default router