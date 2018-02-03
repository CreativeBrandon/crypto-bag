import Vue from 'vue'
import Router from 'vue-router'

const About = () => import('@/views/About.vue')
const Home = () => import('@/views/Home.vue')

Vue.use(Router)

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
  ],
})

