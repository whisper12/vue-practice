import Vue from 'vue'
import Router from 'vue-router'
import inTheaters from '@/components/movie/inTheaters'
import comingSoon from '@/components/movie/comingSoon'
import moviesMsg from '@/components/movie/moviesMsg'
import searchPage from '@/components/movie/searchPage'
import top250 from '@/components/movie/top250'
import searchResult from '@/components/movie/searchResult'
import cityChange from '@/components/movie/cityChange'

import book from '@/components/book/book'
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
    },{
      path: '/book',
      name: 'book',
      component: book
    }
  ]
})
