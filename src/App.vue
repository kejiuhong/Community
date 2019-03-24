<template>
  <div id="app">
    <community-navigator>
      <router-view/>
    </community-navigator>
  </div>
</template>

<script>
import CommunityNavigator from '@/pages/nav/CommunityNavigator'
export default {
  name: 'App',
  components: {
    CommunityNavigator
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/mixins.styl'
#app
  wrapper()
  width: 100%
  background: rgba(214,230,225,.57)
</style>
