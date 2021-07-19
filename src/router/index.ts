import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    name: 'Dashboard',
    path: '/',
    component: () => import('@/views/dashboard/dashboard.vue')
  },

  {
    name: 'Contacts',
    path: '/contacts',
    component: () => import('@/views/contacts/contacts.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
  next()
})

export default router
