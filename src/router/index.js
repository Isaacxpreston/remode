import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components'
import indexNew from '@/components/indexNew'
import sandbox from '@/components/sandbox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: indexNew
    },
    {
      path: '/sandbox',
      component: sandbox
    },
    // {
    //   path: '*',
    //   component: indexNew
    // }
  ]
})
