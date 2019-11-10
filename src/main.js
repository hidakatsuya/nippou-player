import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

new Vue({
  router,
  ...App
}).$mount('#app')
