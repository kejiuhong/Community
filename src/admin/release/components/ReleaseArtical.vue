<template>
  <div>
    <form action="" class="release-artical border-bottom">
      <!-- 内容输入区 -->
      <div class="content-scoped">
        <textarea type="text" class="inputValue" maxlength="140" placeholder="记录自己这一刻的心情..." v-model="value"></textarea>
        <span class="word-count">{{valueLength}}</span>
      </div>
      <!-- 图片区域  -->
      <common-update-img></common-update-img>
    </form>
  </div>
</template>

<script>
import CommonUpdateImg from 'commons/CommonUpdateImg'
export default {
  name: 'ReleaseArtical',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    valueLength () {
      return 140 - (this.value.length)
    }
  },
  components: {
    CommonUpdateImg
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
@import '~styls/baseStyl/mixins.styl'
.release-artical >>> .border-bottomleft::before
  border: 1px solid $borderColor
.release-artical >>> .border::before
  border: 1px solid $borderColor
  border-radius: .3rem
.release-artical
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  padding: .2rem
  color: $textColor
  .content-scoped
    position: relative
    .inputValue
      width: 100%
      height: 4.5rem
      padding-bottom: .2rem
      font-weight: 400
    .word-count
      position: absolute
      bottom: .5rem
      right: .2rem
</style>
