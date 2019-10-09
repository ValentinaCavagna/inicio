import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import Hola from '@/views/Hola'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
   
    {
      path: '/page',
      name: 'Hola',
      component: Hola
    }
  ]
})