// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import fastClick from 'fastclick'
import vueAwesomeSwiper from 'vue-awesome-swiper'
import animate from 'animate.css'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'styls/border.css'
import 'styls/reset.css'
import 'styls/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(vueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
