<template>
  <div id="admin-container">
    <el-container>
      <el-aside width="200px">
        <header>BookCity</header>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
#admin-container {
  height: 100%;
  .el-container {
    .el-aside {
      background-color: #343a40;
    }
  }
}
</style>