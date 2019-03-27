<template>
  <keep-alive>
    <common-scroll>
      <div class="wrapper">
        <home-swiper :img="images"></home-swiper>
        <home-recomment :contentRecomment="recomment"></home-recomment>
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
        .then(this.getSwiperSucc)
    },
    getSwiperSucc (res) {
      // console.log(res)
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.images = data.bannerImg
        this.recomment = data.user
        console.log(data.user)
        console.log(data.user[0].content.images[0].imgUrl)
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
