import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import privacy_policy from './components/privacy_policy.vue'
import Home from './views/home'
import './style.css'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'privacy-policy',
      path: '/privacy-policy',
      component: privacy_policy,
    },
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
  ],
})
