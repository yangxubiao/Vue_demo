<template> 
    <div>
    <v-index/>    
     <el-dialog title="修改"    :show-close="false"  :visible.sync="dialogFormVisible">
          <component :is="component" :query="$route.query" ></component>
    </el-dialog>
  </div>
  </template>
  
  
  <script>
  import vIndex from "@/components/index.vue"
  import  dialogClient from "@/views/dialogClient.vue"
  import  dialogVip  from "@/views/dialogVip.vue"

     export default {
        data(){
            return {
                   dialogFormVisible:true,
                  component:this.$route.query.arrName==="client" ? dialogClient : dialogVip,
            }
        },
        components:{
          "v-index":vIndex,
        }
     }
    
  </script>