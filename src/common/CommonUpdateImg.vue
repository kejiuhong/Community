<template>
  <div>
    <!-- 图片区域  -->
    <div class="photo-scoped">
      <!-- 上传图片展示 -->
      <div class="inputPhoto border" v-for="(item, index) of imgFile" :key="index">
        <i class="delPhoto" @click="handleClickDel(index, item)">X</i>
        <img class="imageFile" :src="item">
      </div>
      <!-- 上传按钮 -->
      <div class="inputPhoto border" @change="handleClickGet">
        <input class="botton" name="photo" type="file" accept="video/*|image/*" ref="inputImg" multiple />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonUpdateImg',
  data () {
    return {
      show: true,
      unShow: false,
      DelIndex: '-1',
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
      // console.log(_this.$refs)
      const inputValue = _this.$refs.inputImg
      const file = inputValue.files
      // console.log(file)
      if (!file) {
        return
      }
      for (let i = 0; i < file.length; i++) {
        // console.log(file[i])
        let reader = new FileReader()
        let files = file[i]
        reader.readAsDataURL(files)
        reader.onload = function () {
          // 读取完成后，将结果赋值给img的src
          if (_this.imgFile.length < 6) {
            // console.log(_this.imgFile.length)
            _this.imgFile.push(reader.result)
          } else {
            alert('最多上传6张')
          }
        }
      }
    },
    // 点击删除图片
    handleClickDel (index) {
      this.imgFile.splice(index, 1)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styls/baseStyl/varible.styl'
@import '~styls/baseStyl/mixins.styl'
.photo-scoped
  display: inline-block
  width: 100%
  float: left
  .inputPhoto
    position: relative
    overflow: hidden
    display: inline-block
    width: 1.5rem
    height: 0
    padding-bottom: 1.5rem
    float: left
    margin: 0 .05rem .05rem 0
    border-radius: .1rem
    .imageFile
      position: absolute
      width: 100%
      height: 100%
      -o-object-fit: cover;
      object-fit: cover;
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
