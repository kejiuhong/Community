<template>
  <div class="scroll-wrapper" ref="scrollWrapper">
    <slot></slot>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CommonScroll',
  props: {
    pullingDown: {
      type: Boolean,
      default: false
    },
    pullingDownY: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      // $ref绑定元素
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.scrollWrapper, {
          click: true, // 开启点击事件，默认为false
          // 下拉刷新
          pullDownRefresh: {
            // 拉距离超过50px触发pullingDown事件
            threshold: 50,
            stop: 10 // 回弹停留在距离顶部20px的位置
          },
          // 上拉加载功能
          pullUpLoad: {
            threshold: -20 // 当上拉距离超过30px时触发 pullingUp 事件
          }
        })
        if (this.pullingDown) {
          this.scroll.on('pullingUp', () => {
            console.log('处理上拉加载操作')
            setTimeout(() => {
              // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
              this.scroll.finishPullUp()
            }, 2000)
          })
        }
        this.scroll.on('pullingDown', () => {
          console.log('处理下拉刷新操作')
          setTimeout(() => {
            console.log('asfsaf')
            // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
            this.scroll.finishPullDown()
          }, 500)
        })
        if (this.pullingDownY) {
          this.scroll.on('scrollStart', (pos) => {
            console.log('ok')
            console.log(pos)
            this.$emit('change')
          })
        }
      } else if (!this.$ref.scrollWrapper) {
        return false
      } else {
        this.scroll.refresh()
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.scroll-wrapper
  width: 100%
  overflow: hidden
  position: absolute
  top: 0
  bottom: .6rem
  z-index: 1
</style>
