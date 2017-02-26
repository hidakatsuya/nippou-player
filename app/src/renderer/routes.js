export default [
  {
    path: '/',
    name: 'player',
    component: require('components/Player/index.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: require('components/Setting/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: require('components/About/index.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
]
