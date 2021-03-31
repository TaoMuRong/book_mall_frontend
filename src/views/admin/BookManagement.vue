<template>
  <div>
    <el-form ref="numberValidateForm" :model="numberValidateForm"  :rules="rules" label-width="80px" size="large" label-position="left">
      <!-- 添加图书和高级搜索按钮 -->
      <el-form-item size="large">
        <el-button type="primary" @click="addBook('numberValidateForm')">添加图书</el-button>
        <el-button type="primary" @click="advanceSearch">高级搜索</el-button>
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
      numberValidateForm: {
        name: "",
        originalPrice: "0.0",
        discount: "1.0",
        prisentPrice: "0.0",
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
          { required: true, message: "折扣不能为空" },
          { type: "number", message: "折扣必须为数字" }
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
    advanceSearch() {
      console.log("转到高级搜索");
    },
    // 添加图书
    addBook(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('添加成功!');
          } else {
            alert('添加失败!!');
            return false;
          }
        });
      },
      // 高级搜索
      advanceSearch(){

      },
      //文件移出警告提示
       beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
  },
};
</script>

<style scoped lang="less">
.input {
  width: 300px;
  
}
</style>