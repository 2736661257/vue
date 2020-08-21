import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Carousel from '../views/Carousel.vue'
import StudentManage from '../views/StudentManage.vue'
import StuAdd from '../components/StuAdd.vue'
import StuList from '../components/StuList.vue'


const routes = [
  {
    path: "/studentmanage",
    component: StudentManage,
    children: [
      {
        path: '/stulist',
        component: StuList
      },
      {
        path: '/stuadd',
        component: StuAdd
      }
    ]
  },
  {
    path: '/carousel',
    component: Carousel
  }
]


const router = new VueRouter({
  routes
})

export default router
