import './App.css';
import {useSelector,useDispatch} from "react-redux";
import React, {useEffect,useState} from "react";
import {getTasks,addUser} from "./action/action.js";
import {Form,Button} from "react-bootstrap";



function App() {
  const [newuser, setNewUser] = useState("")
  const clickme=()=>{
    if (newuser.trim()){
      dispatch(addUser(newuser))
      setNewUser("")
    }
  }
  const dispatch=useDispatch();
  const users = useSelector(state => state.taskReducer.users)
  const loading= useSelector(state=>state.taskReducer.loading)
  console.log("users",users);

  useEffect(() => {
    dispatch (getTasks())
  }, [])
  return (
    <div className="App">
      <div style={{display:"flex", alignItems:"center"}}>
      <div className="form" >
      <Form.Control type="text" value={newuser} placeholder="user name" onChange={(e)=>{setNewUser(e.target.value)}} />
      </div>
      <Button onClick={clickme}>Add</Button>
      </div>
      {loading?
      <h2>Loading...</h2>
      :users?.user?.map((user)=>{
        return(
          <div key={user._id} className="task">
            {user.name}
          </div>
        )

      })}
    </div>
  );
}

export default App;
