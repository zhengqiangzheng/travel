import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import City from '@/pages/City'
import Detail from '../pages/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/city',
      name: 'HelloWorld',
      component: City
    },
    {
      path: '/detail',
      name: 'HelloWorld',
      component: Detail
    }
  ]
})
