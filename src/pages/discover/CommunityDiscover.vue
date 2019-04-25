<template>
    <div id="discover-wrapper">
      <!-- 发布状态 -->
      <router-link to="/release">
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
      </router-link>
      <!-- 发布状态 end -->

      <!-- 动态展示 -->
      <div class="discover-show" ref="discoverShow">
        <!-- 动态展示导航 -->
        <div class="show-nav">
          <a v-for="(item, index) of subheading" :key="index" href="">{{item}}</a>
        </div>
        <!-- 动态展示导航 end -->

        <!-- 动态内容展示 -->
        <div class="show-content border-top" v-for="item of trends" :key="item.id">
          <div class="show-content-left">
            <img class="content-avator" :src="item.avator" alt="">
          </div>
          <div class="show-content-right">
            <div class="content-head">
              <span style="display:inline-block">
                <p style="font-size:.24rem">{{item.alias}}</p>
                <p class="publish-time">{{item.distance}}km . {{item.date}}</p>
              </span>
              <span style="float:right; color:#0bec52; font-weight:bold; font-size:.24rem">关注</span>
            </div>
            <div class="content-main">
              <p class="content-main-text" v-if="item.text">{{item.text}}</p>
              <div ref="contentImg" v-if="item.images">
                <img class="content-main-img" v-for="img of item.images" :key="img.id" :src="img.imagUrl" :class="{contentMainImgs:item.images.length>1?true:false}">
              </div>
            </div>
            <div class="content-ifo">
              <span><i class="iconfont">&#xe60d;</i>{{item.comment.length}}</span>
              <span><i class="iconfont">&#xe60d;</i>{{item.like}}</span>
              <span><i class="iconfont">&#xe616;</i>{{item.viewed}}</span>
            </div>
          </div>
        </div>
        <!-- 动态内容展示 end -->

      </div>
      <!-- 动态展示 end -->
    </div>
</template>

<script>
import axios from 'axios'
import CommonScroll from 'commons/CommonScroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CommunityDiscover',
  data () {
    return {
      subheading: [ '热门', '附近', '此刻' ],
      pullingDownY: true,
      disShow: false,
      trends: [],
      width: '100%'
    }
  },
  created () {
    this.crollHide()
  },
  methods: {
    // 页面滚动到一定高度，顶部导航隐藏
    crollHide () {
      // console.log(document.Element.offsetTop)
      const offTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      // console.log(offTop)
      if (offTop >= 117) {
        this.hiddenNav(this.disShow)
      } else {
        this.hiddenNav(!this.disShow)
      }
    },
    ...mapMutations(['hiddenNav']),
    achieveImg () {
      const images = this.$refs.contentImg.children
      console.log(images[0].width)
      if (images.length > 1) {
       this.width = 2+'rem'
      }
    },
    getTrends () {
      axios.get('/api/trends.json')
        .then(this.trendSucc)
    },
    trendSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.trends = data
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.crollHide)
    this.getTrends()
    this.achieveImg()
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
          width: 88%
          padding-right: .1rem;
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
            .contentMainImgs
              width: 1.8rem !important
              margin: .05rem
          .content-ifo
            display: flex
            justify-content: space-between
            height: .8rem
            line-height: .8rem
            aline-items: center
            font-size: .24rem
            color: #b0cfa9
</style>
