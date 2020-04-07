import {updataSearch,deleteIndex,updata} from "@/methodType/ArrType"
import {MupdataFn,MupdataSearchFn,MdeleteIndexFn} from "@/modules/methods/mutations"
import {AupdataFn,AupdataSearchFn,AdeleteIndexFn} from "@/modules/methods/actions"
import {SearchDate} from "@/modules/methods/getters"
const module = {
    state:{
        search:"",
        vip:[{
            id:1,
            age: '20',
            name: '虎子',
            address: '上海市青浦区'
          }, {
            id:2,
            age: '30',
            name: '狗蛋',
            address: '上海市闵行区'
          }, {
            id:3,
            age: '40',
            name: '强子',
            address: '上海市金山区'
          }, {
            id:4,
            age: '50',
            name: 'hello word',
            address: '上海市普陀区'
          }],
    },
    getters:{
      vip:(function(state,getters,rootState){
        return  SearchDate(state,getters,rootState,'vip')
     })
    },
    actions:{
      [updataSearch]:AupdataSearchFn,
      [deleteIndex]:AdeleteIndexFn,
      [updata]:AupdataFn,
    },
    mutations:{ 
        [updataSearch]:MupdataSearchFn,
        [deleteIndex]:MdeleteIndexFn,
        [updata]:MupdataFn,
    }

};


 export default module;