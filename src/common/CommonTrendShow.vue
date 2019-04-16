<template>
  <div>
    <slot>推荐帖子</slot>
    <div class="container">
      <!-- 内容 -->
      <div class="content border-top" v-for="item of post" :key="item.id">
        <!-- 内容标题 -->
        <div>
          <h2 class="content-title">
            <i class="rec-icon iconfont">&#xe636;</i>
            {{item.title}}
          </h2>
          <p class="title-ifo">
            <i class="avator" >
              <img class="images" :src="item.avator" alt="">
            </i>{{item.alias}}：{{item.inputDate}} {{item.address}}
          </p>
        </div>
        <!-- 内容标题 end -->
        <!-- 内容主体 -->
        <div class="content-text">
          <!-- 文字 -->
          <p class="content-text-wrapper">
            {{item.text}}
          </p>
          <!-- 图片 -->
          <div class="content-text-img" v-if="item.images">
            <img class="images" v-for="item of item.images" :key="item.id" :src="item.imgUrl">
          </div>
        </div>
        <!-- 内容主体 end -->
        <!-- 内容评论等 -->
        <div class="content-ifo">
          <div class="content-ifo-left">
            <span><i class="iconfont">&#xe616;</i>25</span>
            <span><i class="iconfont">&#xe60d;</i>25</span>
          </div>
          <div class="content-ifo-right">
            <span><i class="iconfont">&#xe62a;</i>25</span>
            <slot name="pictures" v-bind:pictures = "item.images"></slot>
          </div>
        </div>
        <!-- 内容评论等 end -->
      </div>
      <!-- 内容 end -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonTrendShow',
  props: {
    post: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
@import '~styls/baseStyl/mixins.styl'
  .title
    height: 1rem
    line-height: 1rem
    font-size: $fontTitle
  //内容
  .content
    padding: .2rem 0
    //内容标题
    .content-title
      padding: .2rem 0
      font-size: $fontTitle-s
      font-weight: 550
      .rec-icon
        color: $textActive
        font-size: .32rem
    // 头像
    .avator
      display: inline-block
      width: .3rem
      height: .3rem
      line-height: .2rem
      margin-right: .1rem
      .images
        width: 100%
        border-radius: 5rem
    // 用户名下方信息
    .title-ifo
      font-size: .2rem
      color: $textColor
    //内容主体
    .content-text
      margin-top: .2rem
      width: 100%
      .content-text-wrapper
        display:inline-block
        contText()
        ellipsis()
        max-height: 1.2rem
        font-size: $fontText
        color:$textColor
      .content-text-img
        overflow: hidden
        display:inline-block
        border-radius: .1rem
        .images
          width: 100%
    //内容信息
    .content-ifo
      height: 1rem
      line-height: 1rem
      contIfo()
      .content-ifo-left
        display: inline-block
        letter-spacing: .02rem
        width: 1.8rem
        text-align: justify
      .content-ifo-left:after {
        content: ""
        display: inline-block
        overflow: hidden
        width: 100%
      }
      .content-ifo-right
        disply: inline-block
        float: right
      .iconfont
        font-size: .25rem
</style>
