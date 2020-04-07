const SearchDate = function(state, getters, rootState,name){
    return state[name].filter(obj=>!state.search || obj.name.toLowerCase().includes(state.search.toLowerCase()))   
}

export {
    SearchDate
}