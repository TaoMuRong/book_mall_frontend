<template>
  <div>
<!--    <template>-->
<!--      <el-button @click="clearFilter">清除所有过滤器</el-button>-->
<!--      <el-table-->
<!--          ref="filterTable"-->
<!--          :data="tableData"-->
<!--          style="width: 100%"-->
<!--          height="550"-->
<!--          :default-sort = "{prop: 'applyTime', order: 'descending'}"-->
<!--          stripe>-->
<!--        <el-table-column-->
<!--            prop="applyTime"-->
<!--            label="申请日期"-->
<!--            width="300"-->
<!--            sortable-->
<!--            column-key="date"-->
<!--        >-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--            prop="id"-->
<!--            label="记录ID"-->
<!--            width="300">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--            prop="bookId"-->
<!--            label="书籍ID"-->
<!--            width="300">-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--            prop="tag"-->
<!--            label="状态"-->
<!--            width="200"-->
<!--            :filters="[{ text: 'PENDING', value: 'PENDING' }, { text: 'APPLY_FAILED', value: 'APPLY_FAILED' }, { text: 'APPLY_SUCCESS', value: 'APPLY_SUCCESS' }]"-->
<!--            :filter-method="filterTag"-->
<!--            filter-placement="bottom-end">-->
<!--          <template slot-scope="scope">-->
<!--            <el-tag-->
<!--                :type="scope.row.status === 'PENDING' ? 'primary' : 'success'"-->
<!--                disable-transitions>{{scope.row.status}}</el-tag>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--        <el-table-column-->
<!--            prop="name"-->
<!--            label="操作"-->
<!--            width="180">-->
<!--          <template slot-scope="scope">-->
<!--            <el-button type="primary"-->
<!--                       :disabled="scope.row.status === 'PENDING' ? true : false"-->
<!--                       @click="openDialog(scope.row.id)"-->
<!--            >-->
<!--              查看详情-->
<!--            </el-button>-->

<!--            &lt;!&ndash;            点击出现的对话框&ndash;&gt;-->
<!--            <el-dialog title="审核结果" :visible.sync="dialogFormVisible" width="30%">-->
<!--              <el-form :model="form">-->
<!--                <el-form-item label="审核时间" :label-width="formLabelWidth" >-->
<!--                  <el-input v-model="form.time" :disabled="true"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="审核人" :label-width="formLabelWidth" >-->
<!--                  <el-input v-model="form.userName" :disabled="true"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="审核意见" :label-width="formLabelWidth">-->
<!--                  <el-input v-model="form.content" :disabled="true"></el-input>-->
<!--                </el-form-item>-->
<!--              </el-form>-->
<!--              <div slot="footer" class="dialog-footer">-->
<!--                <el-dialog-->
<!--                    width="30%"-->
<!--                    title="入库单"-->
<!--                    :visible.sync="innerVisible"-->
<!--                    append-to-body>-->
<!--                  <el-form label-width="100px">-->
<!--                    <el-form-item label="申请人：">-->
<!--                      <el-input v-model="'管理员'+scope.row.applyMemberName" :disabled="true" ></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="书籍ID：">-->
<!--                      <el-input v-model="scope.row.bookId" :disabled="true"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="记录ID：">-->
<!--                      <el-input v-model="scope.row.id" :disabled="true"></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="新入库数：">-->
<!--                      <el-input v-model="scope.row.stock" ></el-input>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item>-->
<!--                      <el-button type="success" @click="reApply(scope.row)" class="reApplyBtn">重新申请</el-button>-->
<!--                    </el-form-item>-->
<!--                  </el-form>-->
<!--                </el-dialog>-->
<!--                <el-button type="success" @click="innerVisible = true" class="reApply">调整申请</el-button>-->
<!--                <div class="btns">-->
<!--                  <el-button @click="dialogFormVisible = false">取 消</el-button>-->
<!--                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
<!--                </div>-->
<!--              </div>-->
<!--            </el-dialog>-->
<!--          </template>-->
<!--        </el-table-column>-->
<!--      </el-table>-->
<!--    </template>-->
  </div>
</template>

<script>
export default {
  name: "PickUpTask",
  data () {
    return {
      // 表格数据绑定对象
      tableData: null
    }
  },
  methods: {
    getTasks(currPage) {
      this.$http
          .get('/wareapply/candidate/tasks', {
            params: {
              limit: 4,
              memberId: localStorage.accountId,
              page: currPage
            }
          })
          .then(response => {
            if (response.status === 200) {
              console.log(response)
              this.tableData = response.data.data
            }
          })
          .catch(function (error) { // 请求失败处理
            console.log(error)
          });
    }
  },
  created() {
    this.getTasks(1)
  }
}
</script>

<style scoped>

</style>
