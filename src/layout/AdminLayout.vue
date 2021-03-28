<template>
  <div id="admin-container">
    <el-container>
      <el-aside width="200px">
        <header>BookCity</header>
        <div class="divider"></div>
        <div class="admin-info-wrap">
          <img
            class="avatar"
            src="../assets/image/avatar.jpg"
            alt="adminAvatar"
          />
          <div class="name">admin</div>
        </div>
        <div class="divider"></div>
        <el-menu
          background-color="#343a40"
          text-color="#FFF"
          default-active="/admin/sort_management"
          router
        >
          <el-menu-item
            :index="item.path"
            v-for="item in menuList"
            :key="item.id"
            @click="handleMenuItemClick(item)"
          >
            <i class="el-icon-menu" v-if="item.name === '分类管理'"></i>
            <i
              class="el-icon-collection"
              v-else-if="item.name === '图书管理'"
            ></i>
            <i
              class="el-icon-s-order"
              v-else-if="item.name === '订单管理'"
            ></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="60px">
          <div class="header-part">
            <div class="to-book-mall" @click="goToBookMall">
              <i class="el-icon-position"></i>
              <span>书城首页</span>
            </div>
            <el-dropdown class="admin-settings">
              <span class="el-dropdown-link">
                {{operator}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="changePWD"
                  >修改密码</el-dropdown-item
                >
                <el-dropdown-item @click.native="logout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>

        <el-main>
          <span>{{ currPage }}</span>
          <el-divider></el-divider>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: "1",
          name: "分类管理",
          path: "/admin/sort_management",
        },
        {
          id: "2",
          name: "图书管理",
          path: "/admin/book_management",
        },
        {
          id: "3",
          name: "订单管理",
          path: "/admin/order_management",
        },
      ],
      currPage: "分类管理",
      operator: '',
    };
  },
  created() {
    this.operator = localStorage.role
  },

  methods: {
    handleMenuItemClick({ name }) {
      this.currPage = name;
    },
    logout() {
      this.$store.commit('REMOVE_ROLE')
      this.$router.replace({name:'login'})
    },
    changePWD() {},
    goToBookMall() {
      this.$router.push({path:'/home/book_mall'})
    },
  },
};
</script>

<style scoped lang="less">
@menu-bgc: #343a40;
.hover-style() {
  cursor: pointer;
  color: #39D7DA;
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#admin-container {
  height: 100%;
  font-family: "微软雅黑";
  .el-container {
    .divider {
      background-color: #454d55;
      margin: 0 2%;
      height: 1px;
    }
    .el-aside {
      color: white;
      background-color: @menu-bgc;
      box-shadow: 1px 0 3px rgba(0, 0, 0, 0.8);
      header {
        font-size: 18px;
        text-align: center;
        height: 50px;
        line-height: 50px;
      }
      .admin-info-wrap {
        display: flex;
        align-items: center;
        height: 80px;
        .avatar {
          border-radius: 50%;
          width: 60px;
          height: 60px;
        }
        .name {
          margin-left: 10px;
          font-size: 14px;
        }
      }
    }

    .el-header {
      display: flex;
      align-items: center;
      font-size: 18px;
      background-color: #f4f6f9;
      justify-content: flex-end;
      .header-part {
        height: 60px;
        width: 20%;
        display: flex;
        justify-content: space-around;
        .to-book-mall {
          flex: 1;
          .center;
          &:hover {
            .hover-style;
          }
          font-size: 14px;
        }
        .admin-settings {
          flex: 1;
          .center;
          &:hover {
            .hover-style;
          }
          font-size: 14px;
        }
      }
    }
  }
}
</style>