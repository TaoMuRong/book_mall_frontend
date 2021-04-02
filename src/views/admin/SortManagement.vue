<template>
  <div>

    <div class="custom-tree-container">
      
      <div class="block">
        
        <el-table  style="width: 100%" :data="data">
          <el-table-column
            label="#">
          </el-table-column>
          <el-table-column
            label="分类名称">
          </el-table-column>
          <el-table-column
          prop="index"
          label="描述">
            <span slot-scope="{ data }">
              <el-button
                size="medium"
                type="success"
                @click="() => append(data)">
                添加一级分类
              </el-button>
            </span>
              
          </el-table-column>
          <el-table-column
            label="操作">
          </el-table-column>
        </el-table >
          
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.index }}</span>
            <span>{{ data.classification }}</span>
            <span>{{ data.description }}</span>
            <span>
              <el-button
                size="small"
                type="primary"
                @click="() => append(data)">
                添加子分类
              </el-button>
              <el-button
                size="small"
                type="primary"
                @click="() => alter(data)">
                修改
              </el-button>
              <el-button
                size="small"
                type="primary"
                @click="() => remove(node, data)">
                删除
              </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>

  </div>
</template>

<script>

let id = 1000;
export default {
  data() {
    var index = 1;
    const data = [{
        id: 1,
        classification: '程序设计',
        description: '程序设计相关',
        children: [{
          id: 2,
          classification: 'java学习指南',
          description: 'java学习指南相关'
        }]
      }
    ];

        return {
          data: JSON.parse(JSON.stringify(data)),
          data: JSON.parse(JSON.stringify(data)),
         
        }
  },
  methods: {
    
    //添加
    append(data) {
        const newChild = { id: id++, 
        classification: 'test', 
        description: 'newTest',
        children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
        this.addCategory(newChild);
      },

    addCategory (newChild) {
      this.$http
          .post('category/add/category',{
            category: {
              description: newChild.description,
              parentId: newChild.id,
              title: newChild.classification
            }
          })
          .then(response => {
            if (response.status === 200) {
              alert("添加成功!!")
            }
          })
          .catch(function (error) { 
            console.log(error);
            alert("添加失败!!" + error)
          });
    },
      //删除
      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
        this.delCategory(data.id);
      },

      delCategory(id){
        this.$http
          .post('category/delete',{
            params: {
              ids: [id],
            }
          })
          .then(response => {
            if (response.status === 200) {
              alert("删除成功！！");
            }
          })
          .catch(function (error) {
            console.log(error);
            alert("删除失败！！" + error);
          });
      },
      //修改
      alter(data) {
        data.classification = "alterTest";
        data.description = "alterNewTest";
        children = [];
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(data);
        this.alterCategory(newData);
      },

      alterCategory (newData) {
        this.$http
            .post('category/update/category',{
              category: {
                description: newData.description,
                parentId: newData.id,
                title: newData.classification
              }
            })
            .then(response => {
              if (response.status === 200) {
                alert("修改成功!!")
              }
            })
            .catch(function (error) { 
              console.log(error);
              alert("修改失败!!" + error)
            });
      },

      //获取目录信息
      getInfoByID (categoryId) {
      this.$http
          .get('category/info/{' + categoryId + '}',{
            params: {
              categoryId: categoryId,
            }
          })
          .then(response => {
            if (response.status === 200) {
              this.data.id = response.data.data.parentId,
              this.data.description = response.data.data.description,
              this.data.classification = response.data.data.title
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    },

    created() {
    this.getInfoByID(1)
  },

        indexMethod(index) {
          return index + 1;
        },

    },

}
</script>

<style scoped lang="less">

.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    border: 1px solid white;
    border-radius: 10%;
}
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