

import {updataSearch} from "@/methodType/ArrType"

const getFn = function(that){

    return  that.$store.state[that.$options.name].search;
}

const setFn = function(that,newVal){
    that.$store.dispatch(updataSearch,{newVal,arrName:(that.$options.name.toLocaleLowerCase())})
}

export {
    getFn,
    setFn
}