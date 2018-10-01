import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloVueRouter from '@/components/HelloVueRouter'
import HelloVuex from '@/components/HelloVuex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/router',
      name: 'HelloVueRouter',
      component: HelloVueRouter
    },
    {
      path: '/vuex',
      name: 'HelloVuex',
      component: HelloVuex
    }
  ]
})
