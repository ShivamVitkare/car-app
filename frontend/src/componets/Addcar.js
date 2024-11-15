import React, { useState } from "react";
import axios from "axios";

function Addcar() {
    const[data,setData]=useState({name:"",desc:"",image:""})

    function change(e){
const{name,value}=e.target
setData({...data,[name]:value})

    }

    async function handleSubmit(e){
        e.preventDefault()
       await axios.post("http://localhost:4000/api/v1/add",data).then((res)=>console.log(res)
       )
       setData("")
    }
  return <div className="container p-4">
    <form className="container p-4">
  <div className="form-group">
    <label for="exampleInputEmail1">Car Name</label>
    <input type="text" className="form-control"  placeholder="Enter name" name="name" value={data.name} onChange={change}/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Description</label>
    <input type="text" className="form-control" placeholder="Enter Description"name="desc"value={data.desc} onChange={change}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Image</label>
    <input type="text" className="form-control"  placeholder="Enter Image URL"name="image" value={data.image} onChange={change}/>
  </div>

 
  <button onClick={handleSubmit} type="submit" className="btn btn-primary m-2">Submit</button>
</form>
  </div>;
}

export default Addcar;
