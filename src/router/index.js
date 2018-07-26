import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import login from '@/components/login'
import signup from '@/components/signup'
import form from '@/components/form'
import community from '@/components/community'
import writeup from '@/components/writeup'
import partner from '@/components/partner'
import profile from '@/components/profile'
import admin from '@/components/admin/admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: { needAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/partner',
      name: 'partner',
      component: partner
    },
    {
      path: '/becomeamember',
      name: 'becomeamember',
      component: signup
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
    path: '/community',
    name: 'community',
    component: community,
    meta: { needAuth: true }
  },
  {
    path: '/writeup',
    name: 'writeup',
    component: writeup
  }
  ]
})
