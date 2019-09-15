/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import home from '@/modules/home/router'
import animation from '@/modules/animation/router'

Vue.use(Router)

let p403 = response => require.eusure([],() => response(require('@/pages/403')))
let p404 = response => require.eusure([],() => response(require('@/pages/404')))

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: resolve => require(['@/pages/container'],resolve),
      children:[
        {
          path:'/',
          component:resolve => require(['@/modules/home/views/home.vue'],resolve)
        },
          ...home,
          ...animation
      ],
      redirect:'/home'
    },
    {path:'/403',component:p403},
    {path:'/404',component:p404},
    {path:'*',component:p404}
  ]
})