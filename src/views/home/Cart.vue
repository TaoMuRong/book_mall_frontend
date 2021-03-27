<template>
  <div class="show_cars">
<!--    购物车列表部分开始-->
    <div>
      <dl>
        <!--      表头部分开始-->
        <dt class="table_head">
          <div class="clearfix">
            <div @click="changeChecked(checked)" >
              <el-checkbox class="btn_head" v-model="checked" >全选</el-checkbox>
            </div>
            <span>图片</span>
            <span>商品名称</span>
            <span>数量</span>
            <span>单价</span>
            <span>总价</span>
          </div>
          <!--        <el-divider></el-divider>-->
        </dt>
        <!--      表头部分结束-->
        <dd v-for="item in items" :key="item.id">
          <div class="single_car">
            <span>
              <el-checkbox class="btn_body" v-model="item.checked"></el-checkbox>
            </span>
            <span>
              <img class="show_image" src="https://z3.ax1x.com/2021/03/26/6vxFmV.jpg" alt="斗罗大陆">
            </span>
            <span>
              {{item.name}}
            </span>
            <span @click="item.totalPrice = item.count * item.price">
              <el-input-number   size="mini" v-model="item.count"  :min="1" :max="10" label="描述文字" class="btn_change_count"></el-input-number>
            </span>
            <span>
              ￥{{item.price}}
            </span>
            <span >
              ￥{{item.totalPrice}}
            </span>
            <el-divider></el-divider>
          </div>
        </dd>
      </dl>
    </div>
<!--    购物车列表部分结束-->
<!--    批量删除部分开始-->
    <div class="clearfix">
      <el-divider></el-divider>
      <div class="left_box">
        <el-button type="danger">批量删除</el-button>
      </div>
      <div class="right_box">
        ￥总价{{newTotalMoney}}
      </div>
<!--      批量删除部分结束-->
    </div>
<!--    收货地址部分开始-->
    <div>
      <el-divider></el-divider>
      <el-input placeholder="请输入内容" v-model="address">
        <template slot="prepend">收货地址</template>
      </el-input>
    </div>
<!--    收货地址部分结束-->
<!--    生成订单部分开始-->
    <div class="createOrders">
      <el-button type="primary">生成订单</el-button>
    </div>
<!--    生成订单部分结束-->
<!--    alert部分开始-->
    <div class="alertMsg">
      <el-alert
          title="注意：请在30天内完成付款，否则订单会自动取消。"
          type="info">
      </el-alert>
    </div>
<!--    alert部分结束-->
  </div>
<!--  <img class="show_image" src="https://z3.ax1x.com/2021/03/26/6vxFmV.jpg" alt="斗罗大陆">-->
<!--  <el-input-number size="mini" v-model=""  :min="1" :max="10" label="描述文字"></el-input-number>-->
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      totalMoney: 90,
      address: "",
      items: [{
        id: 1,
        name: '斗罗大陆',
        count: 1,
        price: 40,
        totalPrice: 40,
        checked: false
      }, {
        id: 2,
        name: '斗破苍穹',
        count: 1,
        price: 50,
        totalPrice: 50,
        checked: false
      }]
    }
  },
  methods: {
    changeChecked(checked) {

      if (!checked) {
        for (let i = 0;i< this.items.length;i++) {
          this.items[i].checked = true;
        }
      }else {
        for (let i = 0;i< this.items.length;i++) {
          this.items[i].checked = false;
        }
      }
    }
  },
  computed: {
    newTotalMoney: function () {
      var m = 0
      for (var i = 0; i < this.items.length;i++) {
        m+=this.items[i].totalPrice
      }
      return m
    }
  }
}
</script>

<style scoped lang="less">
//初始化部分开始
.show_cars {
  font-family: 'Helvetica Neue', 'Helvetica', 'Microsoft Yahei', sans-serif;
  font-weight: 200;
}
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
//初始化部分结束
//表头部分开始
.table_head {
  //background-color: skyblue;
  height: 20px;
}
//表头部分结束
//表格主体部分开始
.btn_head,
.btn_body{
  width: 200px;
  float: left;
}
.show_cars dl dt span,
.show_cars dl dd span{
  float: left;
  width: 200px;
  //line-height: 100px;
}
.show_cars dl dd span {
  line-height: 80px;
}
dd {
  height: 80px;
}
.el-divider {
}
.show_image {
  margin-top: 5px;
  width: 80px;
  float: left;
  margin-left: -20px;
}
.btn_change_count {
  margin-left: -50px;
}
//表格主体部分结束
//批量删除部分开始
.left_box {
  width: 1000px;
}
.left_box,
.right_box {
  float: left;
}
//批量删除部分结束
.createOrders .el-button {
  float: right;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>