<template>
  <div id="app">
    <router-view/>
    <div class="footer-nav">
      <div class="nav" v-for="item of nav" :key="item.id" :class="{active:activeBorder}" @click="handleClick">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nav: [{
        id: 'home',
        name: '首页'
      }, {
        id: 'dicover',
        name: '发现'
      }, {
        id: 'nearby',
        name: '附近'
      }, {
        id: 'me',
        name: '我的'
      }],
      activeBorder: false
    }
  },
  methods: {
    handleClick (e) {
      console.log(e)
    }
  }
}
</script>

<style>
#app {
  overflow: hidden;
  position:absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
}
.footer-nav {
  overflow:hidden;
  display:flex;
  position:fixed;
  bottom:0;
  width:100%;
  height:.7rem;
  z-index:9999;
}
.nav {
  flex:1;
  box-sizing:border-box;
  width: 25%;
  height:.7rem;
  line-height:.7rem;
  text-align:center;
  background:#000;
}
</style>
