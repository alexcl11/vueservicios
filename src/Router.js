import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CochesComponent from './components/CochesComponent.vue'
const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/coches", component: CochesComponent},
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})

export default router