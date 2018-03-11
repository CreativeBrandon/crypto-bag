import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

const About = () => import('@/views/About.vue')
const Bag = () => import('@/views/Bag.vue')
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
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/bag/:id',
      name: 'bag',
      props: true,
      component: Bag,
    },
    {
      path: '/home',
      redirect: '/'
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
