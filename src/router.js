import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/login'
import logout from '@/components/logout'

Vue.use(Router)

export default new Router({
mode: 'history',


  routes: [
    {
      path: '/',
      redirect: {
        name: 'home',
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout,
    }
    
 ]
}) 