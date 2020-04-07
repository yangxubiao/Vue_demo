import {updataSearch,deleteIndex,updata} from "@/methodType/ArrType"
import {MupdataFn,MupdataSearchFn,MdeleteIndexFn} from "@/modules/methods/mutations"
import {AupdataFn,AupdataSearchFn,AdeleteIndexFn} from "@/modules/methods/actions"
import {SearchDate} from "@/modules/methods/getters"
const module = {
    state:{
        search: '',
        client: [{
            id:1,
            date: '2016-05-02',
            name: '韩梅梅',
            address: '上海市黄浦区'
          }, {
            id:2,
            date: '2016-05-04',
            name: '小强',
            address: '上海市浦东区'
          }, {
            id:3,
            date: '2016-05-01',
            name: '明明',
            address: '上海市静安区'
          }, {
            id:4,
            date: '2016-05-03',
            name: 'why you she ?',
            address: '上海市松江区'
          }],
    },
    getters:{
        client:(function(state,getters,rootState){
           return  SearchDate(state,getters,rootState,'client')
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