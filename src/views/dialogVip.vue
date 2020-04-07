<template> 


    <el-form :label-width="formLabelWidth" class="demo-ruleForm">
      <el-input type="hidden" v-model="form.id" autocomplete="off"></el-input>
      <el-form-item label="姓名">
        <el-input type="text" v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>

 
      <el-form-item label="年龄">
          <el-input type="number" v-model="form.age" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="hiddenFn">取消</el-button>
        <el-button @click="resetForm">提交</el-button>
      </el-form-item>
    </el-form>


</template>


<script>
import mixin from "@/mixis/common"

   export default {
     mixins:[mixin],
     props:{
       query:{
        type: Object,
        default:{}
       }
     },
      data(){
          return {
          }
      },
   }
  
</script>