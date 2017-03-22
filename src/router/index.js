import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '@/components/inTheaters'
import comingSoon from '@/components/comingSoon'
import moviesMsg from '@/components/moviesMsg'
import searchPage from '@/components/searchPage'
import top250 from '@/components/top250'
import searchResult from '@/components/searchResult'
import cityChange from '@/components/cityChange'


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
    },
    {
      path: '/movie/:id',
      name: 'moviesMsg',
      component: moviesMsg
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/top250',
      name: 'top250',
      component: top250
    },{
      path: '/searchResult',
      name: 'searchResult',
      component: searchResult
    },{
      path: '/cityChange',
      name: 'cityChange',
      component: cityChange
    }
  ]
})
