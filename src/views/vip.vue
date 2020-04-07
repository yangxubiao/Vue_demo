<template>
  <el-table
    :data="vip"
    style="width: 100%">


    <el-table-column
    label="姓名"
    prop="name">
  </el-table-column>


    <el-table-column
      label="年龄"
      prop="age">
    </el-table-column>

    
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>

      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row,'vip')">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row,'vip')">删除</el-button>
      </template>


    </el-table-column>
  </el-table>
</template>

<script>
import {updataSearch} from "@/methodType/ArrType"
import { mapGetters } from 'vuex'
import mixin from "@/mixis/common"
import {getFn,setFn} from "@/methods/methods" 

  export  default {
    name:"Vip",
    mixins:[mixin],
    data() {
      return {
      
      }
    },
    computed:{
      ...mapGetters(["vip"]),
      search:{
        set:(function(newVal){
           setFn(this,newVal)
        }),
         get:getFn.bind(this)
      }

    },
 
  }
</script>