export default {
  changeAddPage (state, isShow) { // 下方导航动态发布按钮
    state.show = isShow
  },
  hiddenNav (state, change) { // 动态展示页面，页面滚动时导航的改变
    state.change = change
  }
}
