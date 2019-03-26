<template>
  <div class="release-wrapper">
    <release-header></release-header>
    <release-artical></release-artical>
  </div>
</template>

<script>
import ReleaseHeader from './components/ReleaseHeader.vue'
import ReleaseArtical from './components/ReleaseArtical.vue'
export default {
  name: 'CommunityRelease',
  components: {
    ReleaseHeader,
    ReleaseArtical
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
@import '~styls/baseStyl/mixins.styl'
.release-wrapper
  wrapper()
  background: #fff
  z-index: 996
</style>
