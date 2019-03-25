<template>
  <div class="footer-nav">
    <div class="nav iconfont"
        v-for="(item, index) of footerVal"
        :key="index"
        :class="activeIndex === index ? 'activeClass':''"
        @click="handleClick(index, item.path)"
        v-html="item.name"
        v-if="backgroundDefault(e)"
      >
      {{item.name}}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'FooterNav',
  props: {
    footerVal: Array
  },
  data () {
    return {
      activeIndex: 0,
      isshow: false,
      add: 'add'
    }
  },
  computed: {
  },
  methods: {
    handleClick (index, path) {
      // console.log(index)
      this.footerVal.forEach((el) => { el.act = false })
      this.activeIndex = index
      // 路由跳转
      this.$router.push(path)
    },
    backgroundDefault (e) {
      console.log()
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer >>> .nav
  font-size: .4rem
.footer
  bottom: 0
@import '~styls/baseStyl/varible.styl'
.footer-nav
  overflow: hidden
  display: flex
  position: fixed
  width: 100%
  height: .7rem
  bottom: 0
  background: #fff
  z-index: 9999
  .nav
    flex: 1
    box-sizing: border-box
    width: 25%
    height: .7rem
    line-height: .7rem
    text-align: center
    color: $titleColor
    font-size: .4rem
    font-weight:bolder
  .activeClass
    color: $textActive
</style>
