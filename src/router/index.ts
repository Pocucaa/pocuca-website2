import CustomJurney from '@/components/organisms/CustomJurney.vue'
import CustomPortfolio from '@/components/organisms/CustomPortfolio.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeLayout from '../layout/HomeLayout.vue'
import FaxView from '@/pages/FaxView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
      children: [
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
