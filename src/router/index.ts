import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomFax from '@/components/organisms/CustomFax.vue'
import CustomPortfolio from '@/components/organisms/CustomPortfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/fax',
          name: 'Fax',
          component: CustomFax,
        },
        {
          path: '/portfolio',
          name: 'Portfolio',
          component: CustomPortfolio,
        },
        // {
        //   path: '/contact',
        //   name: 'Contact',
        //   component: CustomContact,
        // },
        // {
        //   path: '/skull',
        //   name: 'skull',
        //   component: Customskull,
        // },
      ]      
    },
  ]
})

export default router
