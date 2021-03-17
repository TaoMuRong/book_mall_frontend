<template>
  <div>
    <el-form :inline="true" :model="userInfo" class="demo-form-inline">
      <el-form-item label="用户名">
        <el-input v-model="userInfo.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          v-model="userInfo.pwd"
          placeholder="密码"
          type="password"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
    ...mapMutations({
      setToken: "SET_TOKEN",
      setRole: "SET_ROLE",
    }),
    async onSubmit() {
      const { data } = await this.$http.post("/login", this.userInfo);
      if (data.status) {
        const role = data.result[0];
        this.setRole(role);
        if(role === "admin") {
          this.$router.push({path: '/admin/book_management'})
        } else {
          this.$router.push({path: '/home/book_mall'})
        }
      } else {
        window.alert("login fail!")
      }
    },
  },
};
</script>

<style scoped lang="less">
</style>