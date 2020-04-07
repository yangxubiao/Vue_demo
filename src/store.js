import Vue from 'vue'
import Vuex from 'vuex'
import {updataIndex} from "@/methodType/ArrType"
import Client from "@/modules/client"
import Vip from "@/modules/vip"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      index:"1"
    },
    actions:{
      [updataIndex]({commit},playload){
          commit(updataIndex,playload)
      }
    },
    mutations:{
      [updataIndex](state,playload){
         state.index=playload;
      }
    },
    getters:{
      activeIndex:state=>state.index,
    },
    modules:{
      Vip,
      Client,
     
    }

  })


  export default store;