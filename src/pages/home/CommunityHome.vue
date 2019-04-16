<template>
  <keep-alive>
    <common-scroll>
      <div class="wrapper">
        <home-swiper :img="images"></home-swiper>
        <home-recomment :postRecomment="recomment"></home-recomment>
        <home-trend :contentTrend="recomment"></home-trend>
      </div>
    </common-scroll>
  </keep-alive>
</template>

<script>
import axios from 'axios'
import HomeSwiper from './components/HomeSwiper'
import HomeTrend from './components/HomeTrend'
import HomeRecomment from './components/HomeRecomment'
import CommonScroll from 'commons/CommonScroll'
export default {
  name: 'CommunityHome',
  data () {
    return {
      images: [], // 首页banner
      recomment: [] // 热门帖子
    }
  },
  methods: {
    getSwiper () {
      axios.get('/api/user.json')
        .then(this.handleSucc)
      axios.get('./api/post.json')
        .then(this.handleRecomment)
    },
    handleSucc (res) {
      res = res.data
      // console.log(res.ret)
      if (res.ret && res.data) {
        // console.log('ok')
        const data = res.data
        this.images = data.bannerImg
      }
    },
    handleRecomment (res) {
      res = res.data
      // console.log(res)

      if (res.ret && res.data) {
        const data = res.data
        // console.log(data.post)
        this.recomment = data.post
      }
    }
  },
  mounted () {
    this.getSwiper()
  },
  components: {
    HomeSwiper,
    HomeRecomment,
    CommonScroll,
    HomeTrend
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '~styls/baseStyl/mixins.styl'
</style>
