<template>
  <div class="wrapper">
    <header-nav :headerVal='headerArr'></header-nav>
    <slot></slot>
    <footer-nav :footerVal='footerArr'></footer-nav>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderNav from './components/HeaderNav'
import FooterNav from './components/FooterNav'
export default {
  name: 'CommunityNavigator',
  data () {
    return {
      headerArr: [],
      footerArr: []
    }
  },
  methods: {
    getNavIfo () {
      axios.get('/api/nav.json')
        .then(this.getNavSucc)
    },
    getNavSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.headerArr = data.headerNav
        this.footerArr = data.footerNav
      }
    }
  },
  mounted () {
    this.getNavIfo()
  },
  components: {
    HeaderNav,
    FooterNav
  }
}
</script>

<style lang="stylus" scoped>
</style>
