<template>
  <div class="trend-wrapper">
    <common-trend-show :post="contentTrend">
      <div class="title">热门动态</div>
    </common-trend-show>
  </div>
</template>

<script>
import CommonTrendShow from 'commons/CommonTrendShow'
export default {
  name: 'HomeTrend',
  props: {
    contentTrend: Array
  },
  components: {
    CommonTrendShow
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
@import '~styls/baseStyl/mixins.styl'
.trend-wrapper >>> .content-text-wrapper
  display:inline-block
  contText()
  ellipsis()
  max-height: 1.2rem
  width: 100%
  font-size: $fontText
.trend-wrapper >>> .content-text-img
  width: 100%
  margin-top: .2rem
.trend-wrapper >>> .content .content-text .content-text-img .images
    width: 2.2rem
    float: left
    margin-left: .1rem
.trend-wrapper
  position:relative
  top: .9rem
  bottom: .8rem
  left: 0
  right: 0
  padding: 0 .2rem 1.2rem .2rem
  background: #fff
</style>
