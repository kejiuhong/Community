<template>
  <div id="app">
    <common-nav class="top-nav"></common-nav>
    <router-view/>
    <common-nav></common-nav>
  </div>
</template>

<script>
import CommonNav from 'commons/CommonNav'
export default {
  name: 'App',
  components: {
    CommonNav
  }
}
</script>

<style lang="stylus" scoped>
#app
  overflow: hidden
  position:absolute
  left:0
  right:0
  top:0
  bottom:0
  .top-nav
    top:0
</style>
