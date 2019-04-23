import Vue from 'vue'
import Router from 'vue-router'
import CommunityHome from 'pages/home/CommunityHome' // 首页
import CommunityDiscover from 'pages/discover/CommunityDiscover' // 动态页面
import CommunityMessage from 'pages/message/CommunityMessage' // 信息页面
import CommunityRelease from 'admin/release/CommunityRelease' // 发布动态
import Test from 'pages/test/test' // test

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CommunityHome',
      component: CommunityHome
    }, {
      path: '/discover',
      name: 'CommunityDiscover',
      component: CommunityDiscover
    }, {
      path: '/message',
      name: 'CommunityMessage',
      component: CommunityMessage
    }, {
      path: '/release',
      name: 'CommunityRelease',
      component: CommunityRelease
    }, {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
