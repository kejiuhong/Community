<template>
  <div class="release-header border-bottom">
    <span>取消</span>
    <h1 class="title">新动态</h1>
    <span style="color:#27cf4d">发布</span>
  </div>
</template>

<script>
export default {
  name: 'ReleaseHeader',
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
.release-header
  box-sizing: border-box
  width: 100%
  height: 0
  padding: 0 .3rem
  padding-bottom: 1rem
  line-height: 1rem
  background: $bgColor
  font-size: $fontText
  .title
    display: inline-block
    width: 78%
    text-align: center
</style>
