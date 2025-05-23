import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '@/page/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/about', component: HomePage
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router