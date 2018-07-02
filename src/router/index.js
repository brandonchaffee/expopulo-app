import Vue from 'vue'
import Router from 'vue-router'
import DappCore from '@/components/DappCore'
Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'DappCore',
    component: DappCore
  }]
})
