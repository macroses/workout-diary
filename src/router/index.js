import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calories from '@/views/Calories'
import Exercises from '@/views/Exercises'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calories',
    name: 'Calories',
    linkActiveClass: "active",
    component: Calories
  },
  {
    path: '/exercises',
    name: 'Exercises',
    linkActiveClass: "active",
    component: Exercises
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
