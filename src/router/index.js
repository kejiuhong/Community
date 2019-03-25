import Vue from 'vue'
import Router from 'vue-router'
import CommunityHome from 'pages/home/CommunityHome'
import AddTool from 'pages/tool/AddTool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommunityHome',
      component: CommunityHome
    }, {
      path: '/tool',
      name: 'AddTool',
      component: AddTool
    }
  ]
})
