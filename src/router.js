import Vue from  'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'

Vue.use (Router)

export default new Router ({
    mode: "history",
    routes: [
        {
           path: '/',
           component: Home
        },
        {
            path: '/todos',
            component: () => import('./views/Todos.vue')
        },
        {
            path: '/login',
            component: Login
        }
    ]        
})