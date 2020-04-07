<template>

  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  @select="handleSelect">
      <el-menu-item index="1">普通页面</el-menu-item>
      <el-menu-item index="2">VIP页面</el-menu-item>
    </el-menu>

    <component :is="component"></component>

</div>

</template>



<script>
 import  client from "@/views/client.vue"
 import  vip  from "@/views/vip.vue"
 import { mapGetters } from 'vuex'
 import {updataIndex} from "@/methodType/ArrType"

  export  default {
    data() {
      return {
        component:this.$store.state.index==="1" ? client : vip,
      };
    },
    computed:{
      ...mapGetters(["activeIndex"])
    },
    methods:{
      handleSelect(key, keyPath) {
          this.$store.dispatch(updataIndex,key);
          this.component=this.activeIndex==="1" ? client : vip;
      },
    }
  }
</script>
