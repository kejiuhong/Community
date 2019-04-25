<template>
    <div>
      <common-nav class="header border-bottom" :class="{discoverShow:!disShow}" :nav='headerVal'>
      <template v-slot:left>
        <div class="navIcon iconfont">&#xe61b;</div>
      </template>
      <template v-slot:right>
        <div class="navIcon iconfont">&#xe627;</div>
      </template>
    </common-nav>
    <common-nav class="header border-bottom" :class="{discoverShow:disShow}" :nav="subheading">
      <template v-slot:left>
        <div class="navIcon iconfont">&#xe61b;</div>
      </template>
    </common-nav>
    </div>
</template>

<script>
import CommonNav from 'commons/CommonNav'
import { mapState } from 'vuex'
export default {
  name: 'HeaderNav',
  props: {
    headerVal: Array
  },
  data () {
    return {
      subheading: [
        {name: '热门'}, {name: '附近'}, {name: '此刻'}
      ]
    }
  },
  computed: {
    ...mapState({
      disShow: 'change'
    })
  },
  components: {
    CommonNav
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
.discoverShow
  display: none !important
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
