import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Registros from '../views/Registros.vue'
import GestionUsuarios from '../views/GestionUsuarios.vue'
import Facturacion from '../views/Facturacion.vue'
import NewUser from '../components/newUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/registros',
    name: 'registros',
    component: Registros
  },
  {
    path: '/facturacion',
    name: 'facturacion',
    component: Facturacion
  },
  {
    path: '/gestionUsuarios',
    name: 'GestionUsuarios',
    component: GestionUsuarios
  },
  {
    path: '/newUser',
    name: 'newUser',
    component: NewUser
  },
  {
    path: '/clientes',
    name: 'clientes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Clientes.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
