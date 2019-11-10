import Vue from 'vue'
import VueRouter from 'vue-router'

import Player from 'views/Player/index'
import Setting from 'views/Setting/index'
import About from 'views/About/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'player',
    component: Player
  },
  {
    path: '/setting',
    name: 'setting',
    component: Setting
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({ routes })

export default router
