const initialState={users:[],loading:false}

const taskReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case "getTasksProcess":
        case "addTasksProcess":
            return({...state,loading:true});
        case "getTasksSucceed":
             return({users:payload,loading:false});
        case "getTasksFailed":
        case "addTasksFailed":
             return({...state,loading:false});   
        default:
            return(state)
           
    }
}
export default taskReducer