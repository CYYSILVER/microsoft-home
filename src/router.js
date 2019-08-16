import Vue from 'vue'
import Router from 'vue-router'
import XboxHome from '@/views/XboxHome'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  // mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/xbox',
      name: 'xbox',
      component: XboxHome
    },
    {
      path: '/index.html',
      redirect: {
        path: '/'
      }
    }
  ]
})
