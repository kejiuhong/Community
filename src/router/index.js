import Vue from 'vue'
import Router from 'vue-router'
import CommunityHome from 'pages/home/CommunityHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommunityHome',
      component: CommunityHome
    }
  ]
})
