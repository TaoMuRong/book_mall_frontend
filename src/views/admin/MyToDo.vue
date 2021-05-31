<template>
  <div>
      <el-table
      ref="multipleTable"
      border
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        label="序号"
        type="index"
        width="60">
      </el-table-column>
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        label="任务ID"
        prop="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="applyMemberName"
        label="借款人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="applyTime"
        label="借款时间"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button @click="dialogFormVisible = true;getDetails(9,1,scope.row)" type="primary" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      显示第{{1}}条到第{{11}}条记录，总共{{11}}条记录
    </div>
    <!-- 代办事项详情查看 -->
    <el-dialog title="申请单" :visible.sync="dialogFormVisible">
      <el-form :model="dialogData">
        <el-form-item label="申请者姓名：" :label-width="formLabelWidth">
          <el-input :disabled="true" v-model="dialogData.applyMemberName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="申请完成时间" :label-width="formLabelWidth">
          <el-input :disabled="true" v-model="dialogData.completeTime" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="书id" :label-width="formLabelWidth">
          <el-input :disabled="true" v-model="dialogData.bookId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="库存" :label-width="formLabelWidth">
          <el-input :disabled="true" v-model="dialogData.stock" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="审批人：" :label-width="formLabelWidth">
          <el-select v-model="isPass" placeholder="请选择">
            <el-option label="同意" value="true"></el-option>
            <el-option label="拒绝" value="false"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">返 回</el-button>
        <el-button type="primary" @click="dialogFormVisible = false;complete()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MyToDo",
      data() {
      return {
        tableData: null,
        dialogData: {
          applyMemberName: 1,
          completeTime: 1,
          bookId: 1,
          stock: 1
        },
        multipleSelection: [],
        isPass: null,
        dialogFormVisible: false,
        formLabelWidth: '120px'
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      //获取代办任务
      getTasks(Id,currPage){
        this.$http
          .get('/wareapply/assignee/tasks',{
            params: {
              memberId: Id,
              limit: "11",
              page: currPage
            }
          })
          .then(response => {
            if (response.status === 200) {
              this.tableData = response.data.data
              
            }
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
      //获取查看详情
      getDetails(Id,currPage,index){
        this.$http
          .get('/wareapply/assignee/tasks',{
            params: {
              memberId: Id,
              limit: "11",
              page: currPage
            }
          })
          .then(response => {
            if (response.status === 200) {
              //console.log(index)
              this.dialogData = index
              
            }
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
          });
      },
      //审批任务
      complete(){
        this.$http
          .get('/wareapply/complete/task?isPass=' + this.isPass + '&wareApplyId=' + this.dialogData.id)
          .then(response => {
            if (response.status === 200) {
              this.$message({
                type: 'success',
                message: '任务审批完成'
              });
              
            }
          })
          .catch(function (error) { // 请求失败处理
            console.log(error);
            this.$message.error('糟糕，服务器开小差了TT');
          });
      }
    },

    created() {
    this.getTasks(9,1)
    }

}
</script>

<style scoped>

</style>
