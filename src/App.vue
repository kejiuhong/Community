<template>
  <div id="app">
    <community-navigator>
      <router-view/>
      <add-tool></add-tool>
    </community-navigator>
  </div>
</template>

<script>
import CommunityNavigator from '@/pages/nav/CommunityNavigator'
import AddTool from '@/pages/tool/AddTool.vue'
export default {
  name: 'App',
  components: {
    CommunityNavigator,
    AddTool
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
