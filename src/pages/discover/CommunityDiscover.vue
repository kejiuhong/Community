<template>
    <div id="discover-wrapper">
      <!-- 发布状态 -->
      <div class="discover-publish">
        <div class="user-avator">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553424636502&di=242f0e648ce31cefd368ccd81913bce4&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8cb1cb1349540923d33ac7c29058d109b3de493e.jpg" alt="">
        </div>
        <div class="user-text">
          要不要记录这一刻的心情...
        </div>
        <div class="publish-icon">
        </div>
      </div>
      <!-- 发布状态 end -->

      <!-- 动态展示 -->
      <div class="discover-show" ref="discoverShow">
        <!-- 动态展示导航 -->
        <div class="show-nav">
          <a v-for="(item, index) of subheading" :key="index" href="">{{item}}</a>
        </div>
        <!-- 动态展示导航 end -->

        <!-- 动态内容展示 -->
        <div class="show-content border-top">
          <div class="show-content-left">
            <img class="content-avator" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553424636502&di=242f0e648ce31cefd368ccd81913bce4&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8cb1cb1349540923d33ac7c29058d109b3de493e.jpg" alt="">
          </div>
          <div class="show-content-right">
            <div class="content-head">
              <span style="display:inline-block">
                <p>lili</p>
                <p class="publish-time">1253km . 04.17</p>
              </span>
              <span style="float:right; color:#0bec52; font-weight:bold; font-size:.24rem">关注</span>
            </div>
            <div class="content-main">
              <p class="content-main-text">官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。</p>
              <img class="content-main-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555427657232&di=7241af1f737f0f13dca2c1aad53854cc&imgtype=0&src=http%3A%2F%2Fimg.91jmw.com%2Fuploads%2Fueditor%2Fimage%2F20190401%2F1554097931511635.jpg" alt="">
            </div>
            <div class="content-ifo">
              <span><i class="iconfont">&#xe60d;</i> 8720</span>
              <span><i class="iconfont">&#xe60d;</i> 40</span>
              <span><i class="iconfont">&#xe616;</i> 76</span>
            </div>
          </div>
        </div>
        <!-- 动态内容展示 end -->
        <!-- 动态内容展示 -->
        <div class="show-content border-top">
          <div class="show-content-left">
            <img class="content-avator" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553424636502&di=242f0e648ce31cefd368ccd81913bce4&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8cb1cb1349540923d33ac7c29058d109b3de493e.jpg" alt="">
          </div>
          <div class="show-content-right">
            <div class="content-head">
              <span style="display:inline-block">
                <p>lili</p>
                <p class="publish-time">1253km . 04.17</p>
              </span>
              <span style="float:right; color:#0bec52; font-weight:bold; font-size:.24rem">关注</span>
            </div>
            <div class="content-main">
              <p class="content-main-text">官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。</p>
              <img class="content-main-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555427657232&di=7241af1f737f0f13dca2c1aad53854cc&imgtype=0&src=http%3A%2F%2Fimg.91jmw.com%2Fuploads%2Fueditor%2Fimage%2F20190401%2F1554097931511635.jpg" alt="">
            </div>
            <div class="content-ifo">
              <span><i class="iconfont">&#xe60d;</i> 8720</span>
              <span><i class="iconfont">&#xe60d;</i> 40</span>
              <span><i class="iconfont">&#xe616;</i> 76</span>
            </div>
          </div>
        </div>
        <!-- 动态内容展示 end -->
        <!-- 动态内容展示 -->
        <div class="show-content border-top">
          <div class="show-content-left">
            <img class="content-avator" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553424636502&di=242f0e648ce31cefd368ccd81913bce4&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8cb1cb1349540923d33ac7c29058d109b3de493e.jpg" alt="">
          </div>
          <div class="show-content-right">
            <div class="content-head">
              <span style="display:inline-block">
                <p>lili</p>
                <p class="publish-time">1253km . 04.17</p>
              </span>
              <span style="float:right; color:#0bec52; font-weight:bold; font-size:.24rem">关注</span>
            </div>
            <div class="content-main">
              <p class="content-main-text">官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识。如果你刚开始学习前端开发，将框架作为你的第一步可能不是最好的主意——掌握好基础知识再来吧！之前有其它框架的使用经验会有帮助，但这不是必需的。</p>
              <img class="content-main-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555427657232&di=7241af1f737f0f13dca2c1aad53854cc&imgtype=0&src=http%3A%2F%2Fimg.91jmw.com%2Fuploads%2Fueditor%2Fimage%2F20190401%2F1554097931511635.jpg" alt="">
            </div>
            <div class="content-ifo">
              <span><i class="iconfont">&#xe60d;</i> 8720</span>
              <span><i class="iconfont">&#xe60d;</i> 40</span>
              <span><i class="iconfont">&#xe616;</i> 76</span>
            </div>
          </div>
        </div>
        <!-- 动态内容展示 end -->
      </div>
      <!-- 动态展示 end -->
    </div>
</template>

<script>
import CommonScroll from 'commons/CommonScroll'
export default {
  name: 'CommunityDiscover',
  data () {
    return {
      subheading: [ '热门', '附近', '此刻' ],
      pullingDownY: true
    }
  },
  created () {
    this.crollHide()
  },
  methods: {
    // 页面滚动到一定高度，顶部导航隐藏
    crollHide () {
      // console.log(document.Element.offsetTop)
      // const headerHeight = this.$refs.discoverShow.currentTarget.offsetTop
      console.log(this.$refs.discoverShow.top)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.crollHide)
  },
  beforeDestroy () {
    window.addEventListener('scroll', this.crollHide)
  },
  components: {
    CommonScroll
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styls/baseStyl/varible.styl'
  #discover-wrapper
    overflow: hidden
    position: absolute
    left: 0
    right: 0
    .discover-publish
      overflow: hidden
      width: 100%
      height: 1.3rem
      margin-top: .7rem
      padding: 0 .3rem
      line-height: 1.3rem
      background: #fff
      .user-avator
        float: left
        width: .8rem
        height: .8rem
        img
          width: 100%
          border-radius: $radius
      .user-text
        font-size: .24rem
        color: #b0cfa9
        letter-spacing: .06rem
        padding: 0 1rem
      .publish-icon
        float: right
        width: 1rem
        height: 1rem
    .discover-show
      margin-top: .2rem
      background: #fff
      .show-nav
        height: .8rem
        line-height: 1rem
        padding-left: .4rem
        a
          margin-left: .2rem
          font-size: .24rem
          color: $textColor
          cursor:pointer
      .show-content
        display: flex
        padding: .2rem
        background: #fff
        .show-content-left
          flex: 1
          width: .6rem
          padding-right: .2rem
          .content-avator
            overflow: hidden
            width: .6rem
            height: .6rem
            border-radius: 50%
        .show-content-right
          overflow:hidden
          color: $textColor
          .content-head
            height: .8rem
            line-height: .3rem
            font-size: $fontText
            .publish-time
              color:#b0cfa9
              margin-top:.1rem
              font-size:.24rem
          .content-main
            .content-main-text
              margin-bottom: .3rem
              font-size: $fontText
              word-break: break-all
              line-height: .4rem
            .content-main-img
              width: 100%
              border-radius: $radius
          .content-ifo
            display: flex
            justify-content: space-between
            height: .8rem
            line-height: .8rem
            aline-items: center
            font-size: .24rem
            color: #b0cfa9
</style>
