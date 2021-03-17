<template>
  <div>
    <el-form :inline="true" :model="userInfo" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="userInfo.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="userInfo.pwd" placeholder="密码" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        userName: "",
        pwd: "",
      },
    };
  },
  methods: {
    async onSubmit() {
     const data = await this.$http.post('/login',this.userInfo)
     console.log(data);
    },
  },
};
</script>

<style scoped lang="less">
</style>