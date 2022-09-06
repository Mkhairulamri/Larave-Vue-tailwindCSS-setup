import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
    path : "/",
    name : "index",
    component : ()=> import('../components/example-component.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
