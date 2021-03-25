<template>
  <div>
    <el-container>
      <el-header>
        <div class="header-left">
          <div
            :class="[
              currRouteName === 'book_mall'
                ? 'header-active'
                : 'header-inactive',
              'book-mall-logo',
            ]"
            @click="handleHeaderClick('book_mall')"
          >
            书城logo
          </div>
          <div
            :class="[
              currRouteName === 'cart' ? 'header-active' : 'header-inactive',
              'my-cart',
            ]"
            @click="handleHeaderClick('cart')"
          >
            我的购物车
          </div>
          <div
            :class="[
              currRouteName === 'order' ? 'header-active' : 'header-inactive',
              'my-order',
            ]"
            @click="handleHeaderClick('order')"
          >
            我的订单
          </div>
        </div>
        <div class="header-right">
          <div class="header-search-wrap">
            <el-input
              class="search-input"
              v-model="searchVal"
              size="small"
              placeholder="输入书名"
            ></el-input>
            <el-button class="search-btn" size="small">搜索</el-button>
          </div>
          <el-dropdown class="user-info">
            <span class="el-dropdown-link">
              {{ operator }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="logout"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <div
            class="to-admin-stage"
            v-if="operator === 'admin'"
            @click="goAdminStage"
          >
            <i class="el-icon-position"></i>
            <span>后台管理</span>
          </div>
        </div>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
      currRouteName: "",
      operator: "",
    };
  },
  created() {
    this.operator = localStorage.role;
  },
  mounted() {
    this.currRouteName = this.$route.name;
  },
  methods: {
    // 头部点击
    handleHeaderClick(name) {
      this.$router.push({ name });
      this.currRouteName = name;
    },

    logout() {
      this.$store.commit("REMOVE_ROLE");
      this.$router.replace({ name: "login" });
    },
    goAdminStage() {
      this.$router.push({ path: "/admin/sort_management" });
    },
  },
};
</script>

<style scoped lang="less">
.header-active {
  font-size: 16px;
  font-weight: normal;
  color: #39d7da;
}
.header-inactive {
  font-weight: lighter;
  font-size: 14px;
}

.center() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.hover-style() {
  color: #39d7da;
  cursor: pointer;
}

.el-container {
  margin-left: 2%;
  margin-right: 2%;
  .el-header {
    background-color: #f8f8f8;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    font-family: "微软雅黑";
    height: 60px;
    .header-left {
      display: flex;
      width: 30%;
      height: 100%;
      .book-mall-logo,
      .my-cart,
      .my-order {
        &:hover {
          font-size: 16px;
          font-weight: normal;
          .hover-style;
        }
        flex: 1;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 60px;
      }
    }
    .header-right {
      display: flex;
      width: 30%;
      justify-content: space-between;
      font-size: 14px;
      .header-search-wrap {
        flex: 2;
        display: flex;
        justify-content: space-between;
        .search-input {
          margin-right: 5px;
        }
      }
      .user-info {
        flex: 1;
        .center;
        &:hover {
         .hover-style;
        }
      }
      .to-admin-stage {
        flex: 1;
        .center;
        font-size: 14px;
        &:hover {
          .hover-style;
        }
      }
    }
  }
}
</style>