import Vue from 'vue'
import Router from 'vue-router'
import AddScore from '@/components/AddScore'
import Confirmation from '@/components/Confirmation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AddScore',
      component: AddScore
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation
    }
  ]
})
