import axios from 'axios';

export const getTasks=()=>async(dispatch)=>{
try{
dispatch({type:"getTasksProcess"})
const res=await axios.get("http://localhost:5000/api/users");
dispatch({type:"getTasksSucceed",payload:res.data})
}
catch (error){
    dispatch({type:"getTasksFailed"})
}
}

export const addUser=(name)=>async(dispatch)=>{
    try {
        dispatch({type:"addTasksProcess"})
        const res=await axios.post("http://localhost:5000/api/users",{name});
        dispatch(getTasks())
    } catch (error) {
        dispatch({type:"addTasksFailed"})
    }
}
