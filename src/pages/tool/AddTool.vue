<template>
  <div class="wrapper" v-show="this.isshow">
    <div class="container">
      <div class="content-main animated bounceInUp" :class="{fadeOutDownBig:down}">
        <div class="add-title">
          新的一天在等你
        </div>
        <div class="button-wrapper" @click="handleClickClose">
          <router-link :to="'/release/'" tag="div" class="button animated bounceInUp" :class="{fadeOutDownBig:down}">
            <div class="trend"></div>
            <p>发动态</p>
          </router-link>
          <div class="button animated bounceInUp" :class="{fadeOutDownBig:down}">
            <div class="trend">123</div>
            <p>发帖子</p>
          </div>
        </div>
      </div>
      <div class="close" @click="handleClickClose">×</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'AddTool',
  data () {
    return {
      down: false,
      closeShow: false
    }
  },
  computed: {
    ...mapState({
      isshow: 'show'
    })
  },
  methods: {
    handleClickClose () {
      this.down = true
      const _this = this
      setTimeout(() => {
        _this.isshow = false
      }, 100)
      this.changeAddPage(this.closeShow)
    },
    ...mapMutations(['changeAddPage'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
@import '~styls/baseStyl/mixins.styl'
.wrapper
  wrapper()
  height: 100%
  background: $bgColor
  color: $titleColor
  z-index: 99999
  .container
    min-height: 100%
    .content-main
      padding-bottom: 2rem
      margin-top: 3rem
      .add-title
        contText()
        font-size: $fontText
        text-align: center
      .button-wrapper
        display: flex
        width: 100%
        margin-top: .6rem
        .button
          display:inline-block
          width: 40%
          height: 2rem
          flex: 1
          box-sizing: border-box
          padding-top: .15rem
          text-align: center
          .trend
            display:inline-block
            width: 1.5rem
            height: 1.5rem
            text-align: center
            line-height: 1.5rem
            border-radius: 5rem
            background: #d43d19
            color: #fff
            margin-bottom: .1rem
    .close
      display:inline-block
      position: relative
      width: 100%
      height: 2rem
      margin: -2rem auto
      line-height: 2rem
      text-align: center
      font-size: .6rem
      font-weight: bold
      color: $textColor
      clear: both
      z-index: 100
</style>
