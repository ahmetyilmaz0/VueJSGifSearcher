import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/', name: 'Home', component: Home
  },
  {
    path: '/Trends',
    name: 'Trends',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/**/ '../views/Trends.vue')
  },
  {
    path: '/SearchDetail', name: 'SearchDetail', component: () => import(/*  */ '../views/SearchDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
