import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Other from '../views/Other.vue'
import Phone from '../views/Phone.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/HomeView',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AboutView',
    name: 'about',
    component: AboutView
  },
  {
    path: '/Phone',
    name: 'Phone',
    component: Phone
  },
  {
    path: '*',
    name: 'about',
    component: Other
  },
  {
    path:'/',
    redirect:"/HomeView"
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
