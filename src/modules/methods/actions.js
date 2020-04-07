
import {updataSearch,deleteIndex,updata} from "@/methodType/ArrType"

const  AupdataFn=function({state,commit},playload){
    if(state[playload["arrName"]])
    commit(updata,playload)
}

const AupdataSearchFn=function({state,commit},playload){
    if(state[playload["arrName"]])
    commit(updataSearch,playload)
}


const AdeleteIndexFn=function({state,commit},playload){
    if(state[playload["arrName"]])
    commit(deleteIndex,playload)
}




export {
    AupdataFn,
    AupdataSearchFn,
    AdeleteIndexFn
}