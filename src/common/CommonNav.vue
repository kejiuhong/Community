<template>
  <div class="common-nav">
    <slot name="left"></slot>
    <div class="nav iconfont"
        v-for="(item, index) of nativeNav"
        :key="index"
        :class="activeIndex === index ? 'activeClass':''"
        @click="handleClick(index, item.path)"
        v-html="item.name"
      >
      {{item.name}}
    </div>
    <slot name="right"></slot>
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
      activeIndex: 0
    }
  },
  computed: {
    nativeNav () {
      return this.nav
    }
  },
  methods: {
    handleClick (index, path) {
      // console.log(index)
      this.nav.forEach((el) => { el.act = false })
      this.activeIndex = index
      // 路由跳转
      this.$router.push(path)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
.common-nav
  overflow: hidden
  display: flex
  position: fixed
  width: 100%
  height: .7rem
  background: #fff
  z-index: 9
  .nav
    flex: 1
    box-sizing: border-box
    width: 25%
    height: .7rem
    line-height: .7rem
    text-align: center
    color: $titleColor
    font-size: $fontTitle
    font-weight:bolder
  .activeClass
    color: $textActive
</style>
