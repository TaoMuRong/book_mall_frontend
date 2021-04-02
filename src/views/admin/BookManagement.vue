<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="addSuccessful"
      width="30%"
      :before-close="handleClose">
      <span>添加成功</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addSuccessful = false">取 消</el-button>
        <el-button type="primary" @click="addSuccessful = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 模糊查询 -->
    <el-dialog
      title="模糊查询"
      :visible.sync="searchSuccessful"
      width="30%">
      <el-form :model="searchFormItems" :rules="rules" ref="searchFormItems" label-width="100px" class="demo-ruleForm">
        <el-form-item label="关键字" prop="keyWords">
          <el-input v-model="searchFormItems.keyWords"></el-input>
        </el-form-item>
        <el-form-item label="最多查询数" prop="limit">
          <el-input v-model="searchFormItems.limit"></el-input>
        </el-form-item>
        <el-form-item label="纸张页数" prop="page">
          <el-input v-model="searchFormItems.page"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('searchFormItems')">查找</el-button>
        </el-form-item>
      </el-form>
      <el-dialog
        width="30%"
        title="查询结果"
        :visible.sync="resultFormItems"
        append-to-body>
        <el-form :model="searchFormItems" status-icon :rules="rules" ref="searchFormItems" label-width="100px" class="demo-ruleForm">
          <el-form-item label="当前页数" prop="currPage">
            <span>{{ searchFormItems.currPage }}</span>
          </el-form-item>
          <el-form-item label="列表数据" prop="list">
            <span>{{ searchFormItems.list }}</span>
          </el-form-item>
          <el-form-item label="每页记录数" prop="pageSize">
            <span>{{ searchFormItems.pageSize }}</span>
          </el-form-item>
          <el-form-item label="总记录数" prop="totalCount">
            <span>{{ searchFormItems.totalCount }}</span>
          </el-form-item>
          <el-form-item label="总页数" prop="totalPage">
            <span>{{ searchFormItems.totalPage }}</span>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="resultFormItems = false">确定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <span slot="footer" class="dialog-footer">
        <el-button @click="searchSuccessful = false">取 消</el-button>
        <el-button type="primary" @click="searchSuccessful = false">确定</el-button>
      </span>
    </el-dialog>

    <el-form ref="numberValidateForm" :model="numberValidateForm"  :rules="rules" label-width="80px" size="large" label-position="left">
      <!-- 添加图书和高级搜索按钮 -->
      <el-form-item size="large">
        <el-button type="primary" @click="addBook('numberValidateForm')">添加图书</el-button>
        <el-button type="primary" @click="resetForm('numberValidateForm')">重置</el-button>
        <el-button type="primary" @click="searchForm('numberValidateForm')">高级搜索</el-button>
      </el-form-item>

      <!-- 活动名称输入框 -->
      <el-form-item label="书名" prop="bookName">
        <el-input
          v-model="numberValidateForm.bookName"
          class="input"
          placeholder="输入书名"
        ></el-input>
      </el-form-item>

      <!-- 图书封面上传 -->
      <!-- 存在图片上传跨域问题 -->
      <el-form-item label="图书封面" prop="cover">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture"
          :before-remove="beforeRemove"
        >
          <el-button size="large" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件
          </div>
        </el-upload>
      </el-form-item>

      <!-- 定价 -->
      <el-form-item label="原价" prop="originalPrice">
        <el-input
          v-model.number="numberValidateForm.originalPrice"
          autocomplete="off"
          class="input"
        ></el-input>
      </el-form-item>

      <!-- 折扣 -->
      <el-form-item label="折扣" prop="discount">
        <el-input
          v-model.number="numberValidateForm.discount"
          autocomplete="off"
          class="input"
        ></el-input>
      </el-form-item>

      <!-- 当前价格 -->
      <el-form-item label="现价" prop="prisentPrice">
        <el-input
          v-model.number="numberValidateForm.prisentPrice"
          autocomplete="off"
          class="input"
        ></el-input>
      </el-form-item>


      <!-- 作者和出版社 -->
      <el-col :span="10">
        <el-form-item :inline="true" label="作者" class="demo-form-inline" prop="author">
          <el-input 
          v-model="numberValidateForm.author"
          autocomplete="off" 
          class="input"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="14">
        <el-form-item :inline="true" label="出版社" class="demo-form-inline" prop="publisher">
          <el-input 
          v-model="numberValidateForm.publisher" 
          autocomplete="off" 
          class="input"
          ></el-input>
        </el-form-item>
      </el-col> 

      <!-- 出版时间和印刷时间 -->
      <!-- <el-col :span="10"> -->
        <el-form-item :inline="true" label="出版时间" class="demo-form-inline input" prop="publicationTime">
          <el-date-picker
            v-model="numberValidateForm.publicationTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>        
      <!-- </el-col> -->
      <!-- <el-col :span="14"> -->
        <el-form-item :inline="true" label="印刷时间" class="demo-form-inline input" prop="printingTime">
          <el-date-picker
            v-model="numberValidateForm.printingTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>        
      <!-- </el-col> -->

      <!-- 版次 -->
      <el-form-item label="版次" prop="edition">
        <el-input
          v-model.number="numberValidateForm.edition"
          autocomplete="off"
          class="input"
        ></el-input>
      </el-form-item>

      <!-- 字数和页数 -->
      
        <el-col :span="10">
          <el-form-item :inline="true" label="页数" class="demo-form-inline" prop="pages">
              <el-input
                v-model.number="numberValidateForm.pages"
                autocomplete="off"
                class="input"
              ></el-input>
          </el-form-item>          
        </el-col>
        <el-col :span="14">
          <el-form-item :inline="true" label="字数" class="demo-form-inline" prop="words">
            <el-input
              v-model.number="numberValidateForm.words"
              autocomplete="off"
              class="input"
            ></el-input>
          </el-form-item>          
        </el-col>



      <!-- 开本和纸张 -->
        <el-col :span="10">
          <el-form-item :inline="true" label="开本" class="demo-form-inline" prop="size">
            <el-input
            v-model.number="numberValidateForm.size"
            autocomplete="off"
            class="input"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="14">
          <el-form-item :inline="true" label="纸张" class="demo-form-inline" prop="paper">
            <el-input
              v-model.number="numberValidateForm.paper"
              autocomplete="off"
              class="input"
            ></el-input>
          </el-form-item>
        </el-col>

    </el-form>
      

    

  </div>
</template>

<script>

export default {
 
  data() {
    return {
      baseUrl: "http://bookmall.natapp1.cc/",
      addSuccessful: false,
      searchSuccessful: false,
      resultFormItems : false,
      data: [],
      searchFormItems:{
        keyWords: "",
        limit: 8,
        page: 1,
        currPage: 1,
        list: [],
        pageSize: 1,
        totalCount: 1,
        totalPage: 1,
      },
      numberValidateForm: {
        cover: "",
        bookName: "",
        originalPrice: 0,
        discount: "1.0",
        prisentPrice: 0,
        author: "",
        publisher: "",
        publicationTime: "",
        printingTime: "",
        edition: "",
        pages: "",
        words: "",
        size: "" + "开",
        paper: "",
      },
      rules: {
        bookName: [
          { required: true, message: "书名不能为空" }
        ],
        originalPrice: [
          { required: true, message: "定价不能为空" },
          { type: "number", message: "定价必须为数字" }
        ],
        discount: [
          { required: true, message: "折扣不能为空" }
        ],
        prisentPrice: [
          { required: true, message: "现价不能为空" },
          { type: "number", message: "现价必须为数字" }
        ],
        author: [
          { required: true, message: "作者不能为空" }
        ],
        publisher: [
          { required: true, message: "出版社不能为空" }
        ],
        publicationTime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
        printingTime: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
        edition: [
          { required: true, message: "版次不能为空" },
          { type: "number", message: "版次必须为数字" }
        ], 
        pages: [
          { required: true, message: "页数不能为空" },
          { type: "number", message: "页数必须为数字" }
        ], 
        words: [
          { required: true, message: "字数不能为空" },
          { type: "number", message: "字数必须为数字" }
        ], 
        size: [
          { required: true, message: "开本不能为空" },
        ], 
        paper: [
          { required: true, message: "纸张不能为空" },
        ], 
      },
      
    };
  },
  methods: {
    //高级搜索
    searchForm(formName){
      this._data.searchSuccessful = true
    },
    submitForm(formName){
      var result = this._data.numberValidateForm;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http
            .get('book/select',{
              params: {
                key: result.keyWords,
                limit: result.limit,
                page: result.page
              }
            })
            .then(response => {
              //请求成功
              if (response.status === 200) {
                this.data.currPage = response.data.data.currPage,
                this.data.list = response.data.data.list,
                this.data.pageSize = response.data.data.pageSize,
                this.data.totalCount = response.data.data.totalCount,
                this.data.totalPage = response.data.data.totalPage,
                this._data.resultFormItems = true
              }
            })
            .catch(function (error) {
              alert('抱歉没有此书');
              console.log(error);
            });
            
          } else {
            return false;
          }
        });
    },
    // 添加图书
    //添加成功提示
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    //添加图书与后台接口
    addBook(formName) {
        //this._data.numberValidateForm当前数据对象
        var result = this._data.numberValidateForm;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http
            .post('book/save',{
              book: {
                author: result.author,
                bookName: result.bookName,
                cover: result.cover,
                press: result.publisher,
                price: result.prisentPrice,
                printTime: result.printingTime,
                publishTime: result.publicationTime,
              }
            })
            .then(response => {
              //请求成功
              if (response.status === 200) {
                this._data.addSuccessful = true;
                this._data.data = response.data.data;
              }
            })
            .catch(function (error) {
              alert('添加失败!!');
              console.log(error);
            });
            
          } else {
            return false;
          }
        });
      },
      // 重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //文件移出警告提示
       beforeRemove(file, fileList) {
        return this.$confirm('确定移除？');
      }
  },
  filters: {
    //时间格式化
    timeFormat(timeStr) {
      const time = new Date(timeStr)
      const y = time.getFullYear()
      const m = time.getMonth()
      const d = time.getDay()
      return `${y}-${m}-${d}`
    }
  }
}
</script>

<style scoped lang="less">
.input {
  width: 300px;
  
}
</style>