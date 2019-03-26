<template>
  <div>
    <form action="" class="release-artical border-bottom">
      <!-- 内容输入区 -->
      <div class="content-scoped">
        <textarea type="text" class="inputValue" maxlength="140" placeholder="记录自己这一刻的心情..." v-model="value"></textarea>
        <span class="word-count">{{valueLength}}</span>
      </div>
      <!-- 图片区域  -->
      <div class="photo-scoped">
        <!-- 上传图片展示 -->
        <div class="inputPhoto border" v-for="(item, index) of imgFile" :key="index" v-if="Delindex === index ? 'show' : true">
          <i class="delPhoto" @click="handleClickDel(index)">X</i>
          <img class="imageFile" :src="item">
        </div>
        <!-- 上传按钮 -->
        <div class="inputPhoto border" @change="handleClickGet">
          <input class="botton" name="photo" type="file" accept="video/*|image/*" ref="inputImg" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import 'js/postContent'
export default {
  name: 'ReleaseArtical',
  data () {
    return {
      value: '',
      show: false,
      Delindex: '-1',
      imgFile: []
    }
  },
  computed: {
    valueLength () {
      return 140 - (this.value.length)
    }
  },
  methods: {
    handleClickGet () {
      const _this = this
      const inputValue = _this.$refs.inputImg
      const file = inputValue.files[0]
      // console.log(file)
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (inputValue) {
        // 读取完成后，将结果赋值给img的src
        // console.log(reader.result)
        _this.imgFile.push(reader.result)
      }
    },
    // 点击删除图片
    handleClickDel (index) {
      console.log(index)
      this.Delindex = index
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
@import '~styls/baseStyl/mixins.styl'
.release-artical >>> .border-bottomleft::before
  border: 1px solid $borderColor
.release-artical >>> .border::before
  border: 1px solid $borderColor
  border-radius: .3rem
.release-artical
  display: inline-block;
  position: absolute;
  left: 0;
  right: 0;
  padding: .4rem
  color: $textColor
  .content-scoped
    position: relative
    .inputValue
      width: 100%
      height: 4.5rem
      padding-bottom: .2rem
      font-weight: 400
    .word-count
      position: absolute
      bottom: .5rem
      right: .4rem
  .photo-scoped
    display: inline-block
    width: 100%
    float: left
    .inputPhoto
      position: relative
      overflow: hidden
      display: inline-block
      width: 2rem
      height: 2rem
      float: left
      margin: .1rem
      border-radius: .1rem
      .imageFile
        width: 100%
        height: 100%
      .delPhoto
        position: absolute
        right: .05rem
        top: .05rem
        display: inline-block
        width: .3rem
        height: .3rem
        background: rgba(0,0,0,.6)
        border-radius: 5rem
        text-align: center
        line-height: .3rem
      .botton
        display:inline-block
        position: absolute
        left: 0
        top: 0
        bottom: 0
        opacity: 0
        cursor: pointer
</style>
