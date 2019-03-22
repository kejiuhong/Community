// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fastClick from 'fastclick'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'styls/border.css'
import 'styls/reset.css'
import 'styls/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
