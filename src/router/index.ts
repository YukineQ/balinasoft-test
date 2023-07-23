import { createRouter, createWebHistory } from "vue-router"
import { Layout } from "@/components/Layout";
import Home from '@/views/Home/routes/Home.vue';

export const routes = [
    {
        path: '/movie',
        component: Layout,
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router