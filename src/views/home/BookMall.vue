<template>
  <div>
    <el-container >
      <!--    侧栏开始-->
      <el-aside width="234px">
        <el-row class="tac">
          <el-col :span="20">
            <el-menu
                default-active="1"
                active-text-color="#555555"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
              <el-menu-item index="1">
                <span slot="title">所有分类</span>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <span>程序设计</span>
                </template>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <span>办公室用书</span>
                </template>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <span>多媒体</span>
                </template>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <span>操作系统</span>
                </template>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>

      </el-aside>
      <!--    中心部分开始-->
      <el-main >
        <div class="view_area">
          <ul class="show">
              <li  v-for="item in items" :key="item.num" class="showDiv" >
                <div class="showBox">
                  <router-link to="/home/book_detail" >
                    <img src="../../assets/image/bookPic.jpg" alt="斗罗大陆">
                    <div class="showBox_detail">
                      <p class="book_price">￥{{item.price}}</p>
                      <h4 class="book_title">斗罗大陆</h4>
                      <p>作者：{{item.author}}</p>
                      <p>出版社：{{item.publishHouse}}</p>
                      <p>出版时间：{{item.publishTime}}</p>
                    </div>
                  </router-link>
                </div>
              </li>
          </ul>
        </div>
      </el-main>
<!--      中心部分结束-->
    </el-container>
  </div>
</template>


<script>
export default {
  data () {
    return {
      items: [
        {
          num:1,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"
        },
        {
          num:2,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"},
        {
          num:3,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"},
        {
          num:4,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"
        },
        {
          num:5,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"},
        {
          num:6,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"},
        {
          num:7,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"},
        {
          num:8,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"
        },
        {
          num:9,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"},
        {
          num:10,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"},
        {
          num:11,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"},
        {
          num:12,
          price:40,
          author:"唐家三少",
          publishHouse: "人民出版社",
          publishTime: "2019-09-08"
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
.el-aside {
  text-align: center;
}
.el-main {
  text-align: left;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%;
}

//侧边导航栏开始
.tac {
  text-align: left;
}
.el-menu {
  border: 1px solid #dddddd;
}
.el-submenu {
  border-bottom: 1px solid #dddddd;
  background-color: #dff0d8;
}
.el-menu-item {
  border-bottom: 1px solid #dddddd;
}
.el-submenu:last-child {
  border-bottom: none;
}
//侧栏结束
//main部分开始
.el-main {
  background-color: #f8f8f8;
  font-family: 'Helvetica Neue', 'Helvetica', 'Microsoft Yahei', sans-serif;
  border: 1px solid #dddddd;
  border-radius: 20px;
}
.view_area {
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  padding-left: -30px;
}
.showDiv {
  width: 234px;
  height: 345px;
  float: left;
  margin-left: 30px;
  margin-top: 30px;
  opacity: 100%;
  flex: 1;
}
.showBox {
  width: 234px;
  height: 340px;
  background-color: #fff;
  text-align: center;
  border-radius: 20px;
  transition: all .2s linear;
  margin-top: 5px;
}
.showBox:hover {
  margin-top: 0;
  box-shadow: 0 8px 16px rgba(100,100,100,.18);
}
.showBox img {
  width: 200px;
  height: 200px;
  margin: 20px auto 18px;
}
h4.book_title {
  margin: 0 20px 3px;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 400;
  color: #212121;
  white-space: nowrap;
}
p.book_price {
  color: #ff6709;
  font-size: 14px;
}
p {
  font-size: 12px;
  color: #b0b0b0;
}
//main部分结束
</style>

