import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(Meta)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../components/pages/Main.js')
    },
    {
      path: '/about',
      component: () => import('../components/pages/About.js')
    }
  ]
})
