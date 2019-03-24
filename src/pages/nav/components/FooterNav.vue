<template>
  <common-nav class="footer" :nav='footerVal'></common-nav>
</template>

<script>
import CommonNav from 'commons/CommonNav'
export default {
  name: 'FooterNav',
  props: {
    footerVal: Array
  },
  components: {
    CommonNav
  }
}
</script>

<style lang="stylus" scoped>
.footer >>> .nav
  font-size: .4rem
.footer
  bottom: 0
</style>
