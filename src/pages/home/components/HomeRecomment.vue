<template>
  <div class="recomment-wrapper">
    <common-trend-show :post="postRecomment">
      <div class="title">推荐帖子</div>
      <template v-slot:pictures="pictures">
        <span><i class="iconfont">&#xe62a;</i>{{pictures.pictures.length}}</span>
      </template>
    </common-trend-show>
  </div>
</template>

<script>
import CommonTrendShow from 'commons/CommonTrendShow'
export default {
  name: 'HomeRecomment',
  props: {
    postRecomment: Array
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
  position:relative
  width: 2.4rem
  margin-left: .2rem
  .images
    position:absolute
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
