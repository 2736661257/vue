import Vue from 'vue'
import VueRouter from 'vue-router'

import ShopCartok from '../components/ShopCartok.vue'
Vue.use(VueRouter)

  const routes = [
    {
      name: "shopcartok",
      path: "/",
      component: ShopCartok
    }
]

const router = new VueRouter({
  routes
})

export default router
