import Vue from 'vue'
import Router from 'vue-router'
import CommunityHome from 'pages/home/CommunityHome'
import AddTool from 'pages/tool/AddTool'
import RecommentDiscover from 'pages/discover/RecommentDiscover'
import RecommentMessage from 'pages/message/RecommentMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommunityHome',
      component: CommunityHome
    }, {
      path: '/discover',
      name: 'RecommentDiscover',
      component: RecommentDiscover
    }, {
      path: '/message',
      name: 'RecommentMessage',
      component: RecommentMessage
    }
  ]
})
