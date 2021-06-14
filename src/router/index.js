import Vue from 'vue'
// import VueRouter from './vue-router.js'
 import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import a from '../components/a.vue'
import b from "../components/b.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:'/a',
    name:'a',
    component:a
  },
  {
    path:'/b/:id',
    name:'b',
    component:b
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
