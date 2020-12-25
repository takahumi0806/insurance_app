import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Step1.vue'
import Step2 from "../components/Step2.vue"
import Step3 from "../components/Step3.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/step2',
    name: 'Step2',
    component: Step2
  },
  {
    path: '/step3',
    name: 'Step3',
    component: Step3
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
