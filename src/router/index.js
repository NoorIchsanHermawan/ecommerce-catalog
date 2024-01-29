import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Mens from '../views/Mens.vue'
import Womens from '../views/Womens.vue'
import Discover from '../views/Discover.vue'
import ProductDetail from '@/views/ProductDetail.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Mens',
    name: 'Mens',
    component: Mens
  },
  {
    path: '/Womens',
    name: 'Womens',
    component: Womens
  },
  { path: '/discover', component: Discover },
  { path: '/', redirect: '/discover' },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetail,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
