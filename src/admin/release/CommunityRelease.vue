<template>
  <div class="release-wrapper">
    <div class="release-header border-bottom">
      <span>取消</span>
      <h1 class="title">新动态</h1>
      <span style="color:#27cf4d">发布</span>
    </div>
    <div class="release-artical border-bottom">
      <input type="text" class="inputValue" maxlength="140" v-model="value">
      <span v-model="length"></span>
      <div class="inputPhoto"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityRelease',
  data () {
    return {
      length: 140
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
@import '~styls/baseStyl/mixins.styl'
.release-artical >>> .border-bottomleft::before
  border: 1px solid #d0cccc
.release-wrapper
  wrapper()
  background: #fff
  z-index: 996
  .release-header
    box-sizing: border-box
    width: 100%
    height: 0
    padding: 0 .3rem
    padding-bottom: 1rem
    line-height: 1rem
    background: $bgColor
    font-size: $textFont
    .title
      display: inline-block
      width: 78%
      text-align: center
  .release-artical
    padding-bottom: .2rem
    .inputValue
      width: 100%
      height: 5rem
      background: #000
      padding-bottom: .2rem
    .inputPhoto
      width: 2rem
      height: 2rem
      background: blue
      border-radius: .1rem
</style>
