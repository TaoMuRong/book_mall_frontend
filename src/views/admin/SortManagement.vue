<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 100%"
        >
        <!-- 一级分类 -->
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
          <template slot-scope="scope"  type="index">
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
        <!-- 一级分类按钮，有bug -->
        <!-- <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-button
                size="medium"
                type="success"
                @click="handleFirst(scope.$index, scope.row)">添加一级级分类</el-button>
          </template>
        </el-table-column> -->
        <!-- 二级分类 -->
        <el-table-column :data="secondTableData" type="expand">
          <template slot-scope="props" type="index">

            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item>
                <span>{{ props.row.secondClassification }}</span>
                <span>{{ props.row.secondDescription}}</span>
                <span>
                  <el-button
                    size="medium"
                    type="primary"
                    @click="secondHandleEdit(props.$index, props.row)">修改</el-button>
                  <el-button
                    size="medium"
                    type="danger"
                    @click.native.prevent="secondHandleDelete(props.$index, secondTableData)">删除</el-button>
                </span>
                
              </el-form-item>
              
           
            </el-form>

            
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
            description: '程序设计相关',
            secondClassification: 'java学习指南',
            secondDescription: '一整套java学习指南相关'
          }, {
            classification: '办公室用书',
            description: '办公室用书相关',
            secondClassification: '男人的划水指南',
            secondDescription: '男人的划水指南相关'
          }, {
            classification: '多媒体',
            description: '多媒体相关',
            secondClassification: '上班的划水指南',
            secondDescription: '上班的划水指南相关'
          }, {
            classification: '斗罗大陆专场',
            description: '斗罗死忠粉相关',
            secondClassification: '斗罗大陆5之重生唐三',
            secondDescription: '别问为什么，冲就完了'
          }],
          secondTableData: [{
            secondClassification: 'java学习指南',
            secondClassification: '一整套java学习指南相关'
          },{
            secondClassification: '男人的划水指南',
            secondClassification: '男人的划水指南相关'
          },{
            secondClassification: '上班的划水指南',
            secondClassification: '上班的划水指南'
          },{
            secondClassification: '斗罗大陆5之重生唐三',
            secondClassification: '别问为什么，冲就完了'
          }
          ]
        }
  },
  methods: {
        handleAppendSecond(index, row) {
          alert("无法添加");
        },
        handleEdit(index, row) {
          alert("改毛啊");
        },
        handleDelete(index, row) {
          row.splice(index, 1);
        },
        secondHandleDelete(index, row) {
          row.splice(index, 1);
        },
        secondHandleEdit(index, row) {
          alert("改毛啊");
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

    .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .el-form-item span{
    margin-right: 150px;
  }
</style>