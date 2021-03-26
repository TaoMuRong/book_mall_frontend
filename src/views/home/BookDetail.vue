<template>
  <div>
    <el-container>
<!--      书籍封面图片展示部分开始-->
      <el-aside width="400px">
        <div class="demo-image__preview">
          <el-image
              :src="url"
              :preview-src-list="srcList">
          </el-image>
        </div>
      </el-aside>
<!--      右侧详情部分开始-->
      <el-main>
        <div class="book_msg">
          <h4 class="book_id">商品编号：{{data.bookId}}</h4>
          <p ></p>
          <p class="book_price">
            单价
            <br>
            ￥<span>{{data.bookPrice}}</span>
          </p>
          <h3 class="book_title">书名：{{data.bookTitle}}</h3>
          <p>作者：{{data.bookAuthor}}</p>
          <p>出版社：{{data.publishHouse}}</p>
          <p>出版时间：{{data.bookPrintTime}}</p>
          <div class="book_print_msg">
            <dl class="clearfix">
              <dd>版次：{{data.bookEdition}}</dd>
              <dd>印刷时间：{{data.bookPrintTime}}</dd>
            </dl>
            <dl class="clearfix">
              <dd>页数：{{data.bookPageNum}}</dd>
              <dd>开本：{{data.bookFormat}}</dd>
            </dl>
            <dl class="clearfix">
              <dd>字数：{{data.bookWordCount}}</dd>
              <dd>纸张：{{data.bookPaperMsg}}</dd>
            </dl>
          </div>
          <p></p>
        </div>
        <div class="book_operate">
<!--          改变书籍数量-->
          <el-button-group class="change_count">
            <el-button size="mini"  icon="el-icon-minus" round @click="subBook()"></el-button>
            <el-button size="mini"  disabled>{{bookCount}}</el-button>
            <el-button size="mini"  round @click="addBook()"><i class="el-icon-plus  el-icon--right " ></i></el-button>
          </el-button-group>


            <el-button type="primary" round class="add_to_car_btn">加入购物车</el-button>
            <el-button type="primary" round class="buy_book_btn">购买<i ></i></el-button>

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
      url: 'https://z3.ax1x.com/2021/03/25/6XWHHK.jpg',
      srcList: [
        'https://z3.ax1x.com/2021/03/25/6XWHHK.jpg',
        'https://z3.ax1x.com/2021/03/25/6XWIj1.jpg',
        'https://z3.ax1x.com/2021/03/25/6XW5cR.jpg',
        'https://z3.ax1x.com/2021/03/25/6XWTnx.jpg',
        'https://z3.ax1x.com/2021/03/25/6XW7B6.jpg'
      ],
      data: {
        bookId: 2019080901,
        bookPrice: 40,
        bookTitle: "斗罗大陆",
        bookAuthor: "唐家三少",
        publishHouse: "人民出版社",
        bookEdition: "初版",
        bookPrintTime: "2019-08-09",
        bookPageNum: 200,
        bookFormat: "32开",
        bookWordCount: "200万",
        bookPaperMsg: "普通纸"
      },
      bookCount: 1
    }
  },
  methods: {
    addBook() {
      this.bookCount++
    },
    subBook() {
      if (this.bookCount == 1) return
      this.bookCount--;
    }
  }
}
</script>

<style scoped lang="less">
//初始化开始
//初始化结束
//左边图片展示部分开始
.el-aside {

}
.el-image {

}
//左边图片展示部分结束
//右侧详情部分开始
.el-main {
  font-family: 'Helvetica Neue', 'Helvetica', 'Microsoft Yahei', sans-serif;
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
.book_msg p{
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
  background-color: #f8f8f8;;
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
  left: 20px;
  top: 100px;
}
.buy_book_btn {
  position: absolute;
  left: 200px;
  top: 100px;
}
//右侧书籍操作部分结束
</style>