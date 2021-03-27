<template>
  <div>
<!--    订单主体部分开始-->
    <div class="show_orders">
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
            <span class="clearfix">订单号：{{item.orderId}}</span>
            <span>下单时间：{{item.orderTime}}</span>
          </div>
          <div class="show_list_body">
            <span class="book_pic">
              <img src="https://z3.ax1x.com/2021/03/26/6vxFmV.jpg" alt="斗罗大陆">
            </span>
            <span class="order_money">
              ￥{{item.totalMoney}}
            </span>
            <span >
              <span v-if="item.isPay">已付款</span>
              <span v-else>等待付款</span>
            </span>
            <span class="order_operates">
              <span class="order_operate" v-if="item.isPay">
                <el-button-group >
                  <el-button type="text" size="mini">查看</el-button>
                  <el-button type="text" size="mini">确认收货</el-button>
                  <el-button type="text" size="mini">退货</el-button>
                </el-button-group>
              </span>
              <span class="order_operate" v-show="!item.isPay">
                <el-button-group >
                  <el-button type="text" size="mini">查  看</el-button>
                  <el-button type="text" size="mini">支  付</el-button>
                  <el-button type="text" size="mini">取  消</el-button>
                </el-button-group>
              </span>
            </span>
          </div>
        </dd>
      </dl>
    </div>
<!--    订单主体部分结束-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          orderId: "2019020231",
          orderTime: "2019-09-09 11:23:34",
          isPay: true,
          totalMoney: 500

        },
        {
          orderId: "2019020232",
          orderTime: "2019-09-09 13:23:25",
          isPay: false,
          totalMoney: 450
        },
        {
          orderId: "2019020233",
          orderTime: "2019-09-09 22:23:34",
          isPay: false,
          totalMoney: 450
        }]
    }
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
</style>