<template>
  <swiper
      class="home-swiper"
      :options="swiperOption"
      ref="mySwiper"
      v-if="swiperChange"
      >
    <swiper-slide v-for="item of img" :key="item.id">
      <img class="swiperImg" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    img: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      }
    }
  },
  computed: {
    swiperChange () {
      return this.img.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.home-swiper >>> .swiper-pagination-bullets
  left: 2.4rem
.home-swiper >>> .swiper-pagination-bullet-active
  background: #fff
.home-swiper
  overflow: hidden
  position: relative
  top: .7rem
  width: 100%
  height: 3rem
  .swiperImg
    width: 100%
    height: 3rem;
</style>
