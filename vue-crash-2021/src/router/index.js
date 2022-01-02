import { createRouter, createWebHistory } from "vue-router";
import Info from '../views/Info.vue'
import Home from '../views/Home'

const routes = [
    {
        path: '/info',
        name: 'Info',
        component: Info
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router