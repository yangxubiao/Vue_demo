
const  MupdataFn=function(state,playload){
    if(state[playload["arrName"]])
    state[playload["arrName"]]=state[playload["arrName"]].map(obj=> obj = obj.id===playload.id ? playload.data : obj )
}

const MupdataSearchFn=function(state,playload){
    if(state[playload["arrName"]])
    state.search=playload.newVal;
}


const MdeleteIndexFn=function(state,playload){
    if(state[playload["arrName"]])
    state[playload["arrName"]]=state[playload["arrName"]].filter(obj=>obj.id!==playload.id);

}




export {
    MupdataFn,
    MupdataSearchFn,
    MdeleteIndexFn
}