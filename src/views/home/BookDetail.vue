<template>
  <div>
    <el-container>
      <!--      书籍封面图片展示部分开始-->
      <el-aside width="400px">
        <div class="demo-image__preview">
          <el-image :src="data.cover" :preview-src-list="srcList"> </el-image>
        </div>
      </el-aside>
      <!--      右侧详情部分开始-->
      <el-main>
        <div class="book_msg" v-if="data != null">
          <h4 class="book_id">商品编号：{{ id }}</h4>
          <p></p>
          <p class="book_price">
            单价
            <br />
            ￥<span>{{ data.price }}</span>
          </p>
          <h3 class="book_title">书名：《{{ data.bookName }}》</h3>
          <p>作者：{{ data.author }}</p>
          <p>出版社：{{ data.press }}</p>
          <p>出版时间：{{ data.publishTime | timeFormat() }}</p>
          <div class="book_print_msg">
            <dl class="clearfix">
              <dd>版次：{{ bookEdition }}</dd>
              <dd>印刷时间：{{ data.printTime | timeFormat() }}</dd>
            </dl>
            <dl class="clearfix">
              <dd>页数：{{ bookPageNum }}</dd>
              <dd>开本：{{ bookFormat }}</dd>
            </dl>
            <dl class="clearfix">
              <dd>字数：{{ bookWordCount }}</dd>
              <dd>纸张：{{ bookPaperMsg }}</dd>
            </dl>
          </div>
          <p></p>
        </div>
        <div class="book_operate">
          <!--          改变书籍数量-->
          <el-input-number
            size="small"
            v-model="bookCount"
            :min="1"
            :max="100"
            label="描述文字"
            class="change_count"
          ></el-input-number>
          <el-button type="primary" class="add_to_car_btn"
            >加入购物车</el-button
          >
          <el-button type="primary" class="buy_book_btn">购买<i></i></el-button>
        </div>
      </el-main>
      <!--        右侧详情部分结束-->
      <!--      书籍封面图片展示部分结束-->
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: -1,
      url: "https://z3.ax1x.com/2021/03/25/6XWHHK.jpg",
      srcList: [
        "https://z3.ax1x.com/2021/03/25/6XWHHK.jpg",
        "https://z3.ax1x.com/2021/03/25/6XWIj1.jpg",
        "https://z3.ax1x.com/2021/03/25/6XW5cR.jpg",
        "https://z3.ax1x.com/2021/03/25/6XWTnx.jpg",
        "https://z3.ax1x.com/2021/03/25/6XW7B6.jpg",
      ],
      data: [],
      bookEdition: "第一版",
      bookPageNum: "200页",
      bookFormat: "16开",
      bookWordCount: "200万",
      bookPaperMsg: "宣纸",
      bookCount: 1,
    };
  },

  created() {
    const id = this.$route.params.id;
    this.getBookDetail(id);
    console.log('1');
  },
  beforeRouteUpdate(to, from, next) {
    const id = to.params.id;
    this.id = id;
    this.getBookDetail(id);
    console.log('1');
    next();
  },
  methods: {
    getBookDetail(id) {
      this.id = id;
      this.$http
        .get("book/info/" + this.id)
        .then((response) => {
          if (response.status === 200) {
            console.log("请求成功！");
            this.data = response.data.data;
          }
        })
        .catch(function (error) {
          // 请求失败处理
          console.log("请求失败！");
          console.log(error);
        });
    },
  },
  filters: {
    timeFormat(timeStr) {
      const time = new Date(timeStr);
      const y = time.getFullYear();
      const m = time.getMonth();
      const d = time.getDay();
      return `${y}-${m}-${d}`;
    },
  },
};
</script>

<style scoped lang="less">
//初始化开始
//初始化结束
//左边图片展示部分开始
.el-aside {
}
.el-image {
  width: 300px;
}
//左边图片展示部分结束
//右侧详情部分开始
.el-main {
  font-family: "Helvetica Neue", "Helvetica", "Microsoft Yahei", sans-serif;
  border: 1px solid #dddddd;
  border-radius: 20px;
}
.book_print_msg {
  height: 70px;
}
.book_print_msg dl {
  float: left;
  width: 300px;
}
h3.book_title,
h4.book_id,
.book_msg p {
  margin: 0 20px 10px;
  font-size: 14px;
  font-weight: 200;
  color: #212121;
}
p.book_price {
  font-size: 10px;
  color: #8c939d;
}
p.book_price span {
  font-size: 30px;
  color: red;
}
.book_print_msg {
  margin: 0 20px 10px;
  font-size: 14px;
  font-weight: 200;
  color: #212121;
}
.book_print_msg dd {
  margin-top: 10px;
}
//右侧详情部分结束
//右侧书籍操作部分开始
.book_operate {
  margin: 0 20px 10px;
  background-color: #f8f8f8;
  height: 150px;
  border-radius: 20px;
  position: relative;
}
.change_count {
  position: absolute;
  left: 20px;
  top: 40px;
}
.add_to_car_btn {
  position: absolute;
  left: 30px;
  top: 100px;
}
.buy_book_btn {
  position: absolute;
  left: 300px;
  top: 100px;
}
//右侧书籍操作部分结束
</style>