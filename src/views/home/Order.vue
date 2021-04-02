<template>
  <div >
<!--    订单主体部分开始-->
    <div class="show_orders" v-show="status">
      <dl>
        <dt>
<!--          订单头部部分开始-->
          <div class="show_orders_head clearfix" >
            <span>商品信息</span>
            <span>金额</span>
            <span>订单状态</span>
            <span>操作</span>
          </div>
<!--          订单头部部分结束-->
        </dt>
        <dd v-for="item in items" :key="item.orderId">
          <div class="show_list_head clearfix">
            <span class="clearfix">订单号：{{item.orderNum}}</span>
            <span>下单时间：{{item.createTime}}</span>
          </div>
          <div class="show_list_body">
            <span class="book_pic">
              <img :src="item.cover" alt="斗罗大陆">
            </span>
            <span class="order_money">
              ￥{{item.totalPrice}}
            </span>
            <span >
              <span v-if="item.status">已付款</span>
              <span v-else>等待付款</span>
            </span>
            <span class="order_operates">
              <span class="order_operate" v-if="item.status">
                <el-button-group >
                  <el-button type="text" size="mini" @click="confirmGoods(item.orderId)">确认收货</el-button>
                  <el-button type="text" size="mini">退货</el-button>
                </el-button-group>
              </span>
              <span class="order_operate" v-show="!item.status">
                <el-button-group >
<!--                  <el-button type="text" size="mini" @click="viewOrderMsg(item)">查  看</el-button>-->
                  <el-button :plain="true" type="text" size="mini" @click="payOrders(item.orderId)">支  付</el-button>
                  <el-button duration="1000" :plain="true" type="text" size="mini" @click="dropOrderById(item.orderId)">取  消</el-button>
                </el-button-group>
              </span>
            </span>
          </div>
        </dd>
      </dl>
      <el-divider></el-divider>
      <el-pagination
          layout="prev, pager, next"
          :total="items.pageCount"
          :page-size="pageSize"
          :page-count="totalPage"
          @current-change="currentChange"
      >
      </el-pagination>
    </div>

    <div v-html="payMsg">

    </div>
<!--    订单主体部分结束-->
    

  </div>
</template>

<script>
export default {
  data () {
    return {
      memberId: localStorage.accountId,
      pageCount: 1,
      pageSize: 3,
      totalPage: 1,
      payMsg: null,
      status: true,
      items: []
    }
  },
  methods: {
    getOrderById(page) {
      this.$http
          .get("/order/list/" + this.memberId,{
            params: {
              limit: "3",
              page: page.toString()
            }
          })
          .then((response) => {
            if (response.status === 200) {
              console.log("请求成功！")
              console.log(response)
              this.items = response.data.data.list
              this.totalPage = response.data.data.totalPage
              this.pageSize = response.data.data.pageSize
            }
          })
          .catch(function (error) {
            // 请求失败处理
            console.log("请求失败！");
            console.log(error);
          });
    },
    currentChange(currentPage) {
      this.getOrderById(currentPage)
    },
    dropOrderById(id) {
      this.$message({
        message: '订单删除成功！',
        type: 'success'
      });
      this.$http
          .post("/order/delete",[id])
          .then((response) => {
            if (response.status === 200) {
              this.getOrderById(1)
            }
          })
          .catch(function (error) {
            // 请求失败处理
            console.log("请求失败！");
            console.log(error);
          });
    },
    payOrders(id) {
      this.$confirm('订单支付完成', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '支付成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消支付'
        });
      });
      window.open("http://bookmall.natapp1.cc/order/payOrder?orderId="+id)
      this.getOrderById(1)
    },
    confirmGoods(id) {
      this.$confirm('收货成功', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '收货成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消收货'
        });
      });
      this.$http
          .post("/order/delete",[id])
          .then((response) => {
            if (response.status === 200) {
              this.getOrderById(1)
            }
          })
          .catch(function (error) {
            // 请求失败处理
            console.log("请求失败！");
            console.log(error);
          });
    }

  },
  created() {
    this.getOrderById(1)
  }

}
</script>

<style scoped lang="less">
//初始化开始
.clearfix:before,.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
.show_orders {
  font-family: 'Helvetica Neue', 'Helvetica', 'Microsoft Yahei', sans-serif;
  font-weight: 200;
  width: 1400px;
  margin: 0 auto;
}
//初始化结束
//订单列表头部部分开始
.show_orders_head span {
  float: left;
  height: 40px;
}
.show_orders_head span:first-child,
.show_list_body>span:first-child{
  width: 600px;
}
.show_orders_head span:nth-child(2),
.show_list_body span:nth-child(2) {
  width: 300px;
}
.show_orders_head span:nth-child(3),
.show_list_body span:nth-child(3) {
  width: 250px;
}
.show_orders_head span:nth-child(4),
.show_list_body span:nth-child(4) {
  width: 250px;
}
//订单列表头部部分结束
//订单列表部分主体部分开始
.show_orders dd {
  height: 150px;
}
.show_list_head {
  height: 40px;
  background-color: #f5f5f5;
}
.show_list_head span {
  float: left;
  font-size: 14px;
  line-height: 40px;
}
.show_list_head span:first-child {
  width: 600px;
}
.show_list_body span{
  float: left;
  line-height: 110px;
}
.book_pic {
  height: 110px;
}
.book_pic img {
  width: 110px;
  height: 110px;
}
.show_list_body span div {
  margin: 0;
  padding: 0;
}
span.order_operate {
  width: 50px;
}
.order_operates {
  height: 110px;
}
.order_money {
  font-size: 20px;
  font-weight: 400;
  color: red;
}
//订单列表部门主体部分结束
.show_orders {
  position: relative;
  height: 579px;
}
.el-pagination {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>