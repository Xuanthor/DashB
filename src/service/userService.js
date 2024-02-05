import axios from "axios"

const fetchAllUser = ()=>{
  return axios.get("http://localhost:3001/api/v1/users?current=1");
  
}

export {fetchAllUser }