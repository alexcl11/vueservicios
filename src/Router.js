import {createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'
import CochesComponent from './components/CochesComponent.vue'
import CustomersComponent from './components/CustomersComponent.vue'
import EmpleadosComponent from './components/EmpleadosComponent.vue'
import EmpleadosOficios from './components/EmpleadosOficios.vue'
const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/coches", component: CochesComponent},
    {path: "/customers", component: CustomersComponent},
    {path: "/empleados", component: EmpleadosComponent},
    {path: "/empleadosoficio/:oficio", component: EmpleadosOficios},
]

const router = createRouter({
    history: createWebHistory(), 
    routes: myRoutes
})

export default router