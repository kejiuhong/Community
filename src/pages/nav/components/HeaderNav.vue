<template>
    <common-nav class="header" :nav='headerVal'>
      <template v-slot:left>
        <div class="navIcon iconfont">&#xe61b;</div>
      </template>
      <template v-slot:right>
        <div class="navIcon iconfont">&#xe627;</div>
      </template>
    </common-nav>
</template>

<script>
import CommonNav from 'commons/CommonNav'
export default {
  name: 'HeaderNav',
  props: {
    headerVal: Array
  },
  components: {
    CommonNav
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
.header
  top: 0
  .navIcon
    display:inline-block
    width: 1.2rem
    text-align:center
    color: $textColor
    font-size: .34rem
    line-height: .7rem
</style>
