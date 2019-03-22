<template>
  <div class="footer-nav">
    <div class="nav iconfont" v-for="item of nativeNav" :key="item.id" :class="{activeClass:item.act}" @click="handleClick" v-html={{iconfont}} >{{item.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  props: {
    nav: Array
  },
  data () {
    return {
      activeValue: ['首页', '发现', '附近', '我的'],
      activefooter: ['&#xe755;', '&#xe629;', '&#xe60d;', '&#xe66c;']
    }
  },
  computed: {
    nativeNav () {
      return this.nav
    }
  },
  methods: {
    handleClick (e) {
      this.handleClickHeader(e)
      this.handleClickFooter(e)
    },
    handleClickHeader (e) {
      this.nativeNav.forEach((el) => { el.act = false })
      const eventIndex = this.activeValue.indexOf(e.target.innerText)
      this.nativeNav[eventIndex].act = true
      console.log(this.nativeNav[eventIndex].act)
    },
    handleClickFooter (e) {
      this.nativeNav.forEach((el) => { el.act = false })
      const footerIndex = this.activefooter.indexOf(e.target.innerText)
      this.nativeNav[footerIndex].act = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
.footer-nav
  overflow: hidden
  display: flex
  position: fixed
  bottom: 0
  width: 100%
  height: .7rem
  z-index: 9999
  .nav
    flex: 1
    box-sizing: border-box
    width: 25%
    height: .7rem
    line-height: .7rem
    text-align: center
    color: $titleColor
    font-size: $fontTitle
  .activeClass
    color: $textActive
</style>
