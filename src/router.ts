import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

const About = () => import('@/views/About.vue')
const Home = () => import('@/views/Home.vue')
const NotFoundPage = () => import('@/views/NotFound.vue')

Vue.use(VueRouter)
Vue.use(Meta)

export default new Router({
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/404',
      component: NotFoundPage
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
})
