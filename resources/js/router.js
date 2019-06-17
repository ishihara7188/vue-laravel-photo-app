import Vue from 'vue'
import VueRouter from 'vue-router'

import PhotoList from './pages/PhotoList'
import Login from './pages/Login'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: PhotoList,
    },
    {
        path: '/login',
        component: Login,
    },
]

const router = new VueRouter({
    routes
})

export default router