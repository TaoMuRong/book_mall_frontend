<template>
  <div id="login-container">
    <!-- 登录 -->
    <div class="login-form">
      <div class="login-title">Login</div>
      <div class="username">
        <label for="username-input" class="username-label">用户名</label>
        <input
          id="username-input"
          v-model="userInfo.username"
          placeholder="用户名"
        />
      </div>

      <div class="pwd">
        <label for="pwd-input" class="pwd-label">密码</label>
        <input
          id="pwd-input"
          v-model="userInfo.password"
          placeholder="密码"
          type="password"
        />
      </div>
      <div class="form-btn">
        <el-button type="primary" @click="onLogin" size="medium"
          >登录</el-button
        >
        <el-button type="primary" @click="onRegistry" size="medium"
          >注册</el-button
        >
      </div>
    </div>

    <!-- 注册 -->
    <el-dialog
      title="用户注册"
      :visible.sync="registerDialogVis"
      width="25%"
      @closed="handleDialogClosed('registerInfoForm')"
    >
      <el-form
        :model="registerInfo"
        label-width="80px"
        label-position="left"
        size="medium"
        :rules="registerInfoRules"
        ref="registerInfoForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="registerInfo.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="registerInfo.password"
            autocomplete="off"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPWD">
          <el-input
            v-model="registerInfo.confirmPWD"
            autocomplete="off"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleDialogConfirm">确 定</el-button>
        <el-button @click="handleDialogCancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    const checkconfirmPWD = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value !== this.accountInfo.newPWD) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    return {
      userInfo: {
        username: "",
        password: "",
      },
      registerInfo: {
        username: "",
        password: "",
        confirmPWD: "",
      },
      registerInfoRules: {
        username: [
          { required: true, message: "请输入新用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入新密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        confirmPWD: [{ validator: checkconfirmPWD, trigger: "change" }],
      },

      registerDialogVis: false,
    };
  },
  methods: {
    ...mapMutations({
      setRole: "SET_ROLE",
    }),
    async onLogin() {
      const { data } = await this.$http.post("/member/login", this.userInfo);
      console.log(data);
      if (data.success) {
        this.$message({
          message: "登录成功",
          type: "success",
          showClose: true,
          duration: 1500,
        });
        const role = data.data.auth;
        this.setRole(role);
        if (role === "admin") {
          this.$router.push({ path: "/admin/sort_management" });
        } else {
          this.$router.push({ path: "/home/book_mall" });
        }
      } else {
        this.$message({
          message: `登录失败！${data.message}`,
          type: "error",
          showClose: true,
          duration: 1500,
        });
      }
    },

    onRegistry() {
      this.registerDialogVis = true;
    },

    handleDialogClosed(formName) {
      this.$refs[formName].resetFields();
    },

    handleDialogConfirm() {
      this.registerDialogVis = false;
    },

    handleDialogCancel() {
      this.registerDialogVis = false;
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
    border-color: #39d7da;
  }
  width: @input-width;
  height: @label-height;
  border-radius: 999px;
  padding-left: 10px;
  border: 1px solid #dcdfe6;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
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
  .login-title {
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
    .form-btn {
      display: flex;
      justify-content: space-between;
      width: 170px;
      margin-top: 10px;
    }
  }
}
</style>