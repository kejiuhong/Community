<template>
  <div class="recomment-wrapper">
    <common-trend-show :content="contentRecomment">
      <div class="title">推荐帖子</div>
    </common-trend-show>
  </div>
</template>

<script>
import CommonTrendShow from 'commons/CommonTrendShow'
export default {
  name: 'HomeRecomment',
  props: {
    contentRecomment: Array
  },
  components: {
    CommonTrendShow
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
@import '~styls/baseStyl/mixins.styl'
.recomment-wrapper >>> .content-text-img
  width: 2.4rem
  margin-left: .2rem
.recomment-wrapper >>> .content-text-wrapper
  flex: 1
  width: 3rem
.recomment-wrapper >>> .content-text
  display:flex
.recomment-wrapper
  overflow: hidden
  position: relative
  left: 0
  right: 0
  top: .7rem
  margin-top: .2rem
  padding: 0rem .25rem
  background: rgb(255,255,255)
</style>
