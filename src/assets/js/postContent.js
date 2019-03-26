releaseUpdate = function (arg) {
  if (!arg) {
    return
  }
  if (arg > 1 * 1024 * 1024 || arg < 3 * 1024) {
    return '图片大小要在3K~1M之间'
  }
  let reader = new FileReader()
  reader.readAsDataURL(arg)
  reader.onload = function (inputValue) {
    // 读取完成后，将结果赋值给img的src
    // console.log(reader.result)
    _result = reader.result
  }.bind(this)
}
