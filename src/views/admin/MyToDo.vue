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
        prop="raskID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="borrower"
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
        <template>
          <el-button @click="dialogFormVisible = true" type="primary" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      显示第{{1}}条到第{{1}}条记录，总共{{1}}条记录
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
          <el-select v-model="dialogData.isPass" placeholder="请选择">
            <el-option label="同意" value="true"></el-option>
            <el-option label="拒绝" value="false"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">返 回</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MyToDo",
      data() {
      return {
        tableData: [{
          raskID: '1',
          borrower: '胡涛',
          applyTime: "2021.5.20",
          isPass: false
        }],
        dialogData: {
          applyMemberId: 0,
          applyMemberName: "胡涛",
          bookId: 1,
          completeTime: "2020.5.20",
          id: 0,
          status: "",
          stock: 250,
        },
        multipleSelection: [],
        
        dialogFormVisible: false,
        formLabelWidth: '120px'
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      getTasks(){
        
      }
    },

    created() {
    this.getTasks()
    }

}
</script>

<style scoped>

</style>
