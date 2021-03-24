<template>
  <div id="login-container">
    <div class="login-form">
      <div class="login-title">Login</div>
      <div class="username">
        <label for="username-input" class="username-label">用户名</label>
        <input
          id="username-input"
          v-model="userInfo.userName"
          placeholder="用户名"
        />
      </div>

      <div class="pwd">
        <label for="pwd-input" class="pwd-label">密码</label>
        <input
          id="pwd-input"
          v-model="userInfo.pwd"
          placeholder="密码"
          type="password"
        />
      </div>

      <el-button type="primary" @click="onSubmit">登录</el-button>
    </div>
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
        if (role === "admin") {
          this.$router.push({ path: "/admin/sort_management" });
        } else {
          this.$router.push({ path: "/home/book_mall" });
        }
      } else {
        window.alert("login fail!");
      }
    },
  },
};
</script>

<style scoped lang="less">
@login-input-wrap-width: 80%;

@label-height: 40px;
@label-width: 80px;

@input-height: 30px;
@input-width: 200px;

.input-style(@input-width,@label-height) {
  &:focus {
    outline: 0;
    border-color: #39D7DA;
  }
  width: @input-width;
  height: @label-height;
  border-radius: 999px;
  padding-left: 10px;
  border: 1px solid #DCDFE6;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1)
}

.label-style(@label-height,@label-width) {
  text-align: center;
  height: @label-height;
  line-height: @label-height;
  width: @label-width;
}
.input-wrap-style(@login-input-wrap-width) {
  display: flex;
  align-items: center;
  width: @login-input-wrap-width;
}

#login-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/image/beijing.webp") no-repeat;
  background-size: cover;
  .login-title{
    font-size: 22px;
  }
  .login-form {
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
    box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    .username {
      .input-wrap-style(@login-input-wrap-width);
      .username-label {
        .label-style(@label-height,@label-width);
      }
      #username-input {
        .input-style(@input-width,@label-height);
      }
    }
    .pwd {
      .input-wrap-style(@login-input-wrap-width);
      .pwd-label {
        .label-style(@label-height,@label-width);
      }
      #pwd-input {
        .input-style(@input-width,@label-height);
      }
    }
  }
}
</style>