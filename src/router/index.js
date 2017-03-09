import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '@/components/inTheaters'
import comingSoon from '@/components/comingSoon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'inTheaters',
      component: inTheaters
    },
    {
      path: '/inTheaters',
      name: 'inTheaters',
      component: inTheaters
    },
    {
      path: '/comingSoon',
      name: 'comingSoon',
      component: comingSoon
    }
  ]
})
