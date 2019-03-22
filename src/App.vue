<template>
  <div id="app">
    <common-nav :nav='headerNav' class="top-nav"></common-nav>
    <router-view/>
    <common-nav :nav='footerNav'></common-nav>
  </div>
</template>

<script>
import axios from 'axios'
import CommonNav from 'commons/CommonNav'
export default {
  name: 'App',
  data () {
    return {
      footerNav: [],
      headerNav: []
    }
  },
  methods: {
    getNavIfo () {
      axios.get('/api/nav.json')
        .then(this.getSucess)
    },
    getSucess (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.footerNav = data.footerNav
        this.headerNav = data.headerNav
      }
    }
  },
  mounted () {
    this.getNavIfo()
  },
  components: {
    CommonNav
  }
}
</script>

<style lang="stylus" scoped>
#app
  overflow: hidden
  position:absolute
  left:0
  right:0
  top:0
  bottom:0
  .top-nav
    top:0
</style>
