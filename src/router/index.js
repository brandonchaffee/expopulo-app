import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Dashboard from '@/views/Dashboard'
import Account from '@/views/Account'
import Project from '@/views/Project'
import Organization from '@/views/Organization'
import Task from '@/views/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    { path: '/account/:id', component: Account },
    { path: '/project/:id', component: Project },
    { path: '/org/:id', component: Organization },
    { path: '/task/:id', component: Task }
  ]
})
