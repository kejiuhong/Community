<template>
  <div id="app">
    <router-view/>
    <div class="footer-nav">
      <div class="nav" v-for="item of nav" :key="item.id" :class="{activeClass:item.act}" @click="handleClick">{{item.name}}</div>
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
        name: '首页',
        act: true
      }, {
        id: 'dicover',
        name: '发现',
        act: false
      }, {
        id: 'nearby',
        name: '附近',
        act: false
      }, {
        id: 'me',
        name: '我的',
        act: false
      }],
      activeValue: ['首页', '发现', '附近', '我的']
    }
  },
  methods: {
    handleClick (e) {
      this.nav.forEach((el) => { el.act = false })
      const eventIndex = this.activeValue.indexOf(e.target.innerText)
      this.nav[eventIndex].act = true
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
  color:#505450;
}
.activeClass {
  color:#008000;
}
</style>
