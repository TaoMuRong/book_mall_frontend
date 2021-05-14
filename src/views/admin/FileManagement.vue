<template>
  <div>
    <el-upload
      class="upload"
      drag
      action="http://bookmall.natapp1.cc/book/upload"
      :multiple="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传xlsx文件/一次一个
      </div>
    </el-upload>
    <el-button>
      下载文件
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.upload{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

}
</style>