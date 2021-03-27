<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="#"
          type="index"
          :index="indexMethod">
        </el-table-column>
        <el-table-column
          label="分类名称"
          prop="classification">
        </el-table-column>
        <el-table-column
          label="描述"
          prop="description">
        </el-table-column>
        <el-table-column
          label="操作"
          prop="operation">
          <template slot-scope="scope">
            <el-button
              size="medium"
              type="primary"
              @click="handleAppendSecond(scope.$index, scope.row)">添加二级分类</el-button>
            <el-button
              size="medium"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button
              size="medium"
              type="danger"
              @click.native.prevent="handleDelete(scope.$index, tableData)">删除</el-button>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-button
                size="medium"
                type="success"
                @click="handleFirst(scope.$index, scope.row)">添加一级级分类</el-button>
          </template>
        </el-table-column>
        

      </el-table>

  </div>
</template>

<script>
export default {
  data() {
        return {
          tableData: [{
            classification: '程序设计',
            description: '程序设计相关'
          }, {
            classification: '办公室用书',
            description: '办公室用书相关'
          }, {
            classification: '多媒体',
            description: '多媒体相关'
          }, {
            classification: '斗罗大陆专场',
            description: '斗罗死忠粉相关'
          }],
        }
  },
  methods: {
        handleAppendSecond(index, row) {
          alert("无法添加");
        },
        handleEdit(index, row) {
          alert("改毛啊");
        },
        handleDelete(index, rows) {
          rows.splice(index, 1);
        },
        indexMethod(index) {
          return index + 1;
        },
        handleAppendFirst(index, row) {
          alert("暂时无法添加");
        },
    },

}
</script>

<style scoped lang="less">

</style>