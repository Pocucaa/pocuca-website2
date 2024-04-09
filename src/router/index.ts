import CustomJurney from '@/components/organisms/CustomJurney.vue'
import CustomPortfolio from '@/components/organisms/CustomPortfolio.vue'
import FaxView from '@/pages/FaxView.vue'
import HomeView from '@/pages/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '../layout/HomeLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeLayout',
      component: HomeLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/fax',
          name: 'Fax',
          component: FaxView
        },
        {
          path: '/portfolio',
          name: 'Portfolio',
          component: CustomPortfolio
        },
        {
          path: '/jurney',
          name: 'Jurney',
          component: CustomJurney
        }
      ]
    }
  ]
})

export default router
