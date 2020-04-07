import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../components/index.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import( '../views/dialog.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
