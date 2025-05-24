import { createMemoryHistory, createRouter } from 'vue-router'
import { ERouterName } from '@/model/const'

const routes = [
  { path: '/',
    name: ERouterName.Home,
    component: () => import('@/page/HomePage.vue') 
  }, {
    path: '/about', 
    name: ERouterName.About,
    component: () => import('@/page/AboutPage/AboutPage.vue')
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router