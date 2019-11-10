import Player from './views/Player/index'
import Setting from './views/Setting/index'
import About from './views/About/index'

export default [
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
