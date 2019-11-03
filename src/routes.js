import Player from './components/Player/index'
import Setting from './components/Setting/index'
import About from './components/About/index'

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
