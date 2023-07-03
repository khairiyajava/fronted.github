import React, { useEffect } from 'react'
import './Glist.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

 function Glist () {
  const [Students, setStudent] = useState([]);
  const Navigate =useNavigate();

  useEffect(()=>{
    loadStudent();
  },[]);

  const loadStudent = async () =>{
    try{
      const result= await axios.get("http://localhost:8090/api/V1/Get_all");
      setStudent(result.data);
    }catch(error) {
      console.log(error);
    }
  };
  const deletehandelSubmit =(stu_Id)=>{
    const popMessage = window.confirm('Are you sure you Want to Delete?');
    if (popMessage){
      axios.delete(`http://localhost:8090/api/V1/delete/${stu_Id}`)
      .then((res)=>{
        Navigate("/ad");
        window.location.reload();
      })
      .catch((error)=> console.log(error));
    }
  };
      



  


  return (
    <div>
    {/* <div className="col-sm-4">
    <Link className="btn btn-info add-new">Add new</Link>
    </div> */}
    <div class="button-container">
    <Link to={"/student"} className="btn btn-info add-button" >Add</Link>
    <button  type='button' className='btn5 btn-danger 
 btn-info DELETE'></button>
  </div>
 <table id="myTable">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Graduate Years</th>
      <th>Enrollment Status</th>
      <th>Action</th>
    </tr>
    <tbody>{

    Students.length >0 ?(
    Students.map((student,index) =>(
    <tr key={index}>
     
      <td>{index + 1}</td>
      <td>{student.name}</td>
      <td>{student.date}</td>
      <td>{student.enrollment_status}</td>
      <td>
    
      <Link to={`/ed/${student.stu_Id}`} type="button" className="btn btn-info editBtn" >Edit</Link>
        {/* <button class="editBtn">Edit</button> */}
        <button onClick={()=>deletehandelSubmit(student.stu_Id)} class="deleteBtn">Delete</button>
      </td>
    </tr>
    ))
    ):(
      <tr>
        <td colSpan="4">hhhhh</td>
      </tr>
    )
    }
    </tbody>
     </table>   
    </div>
  )
}
export default Glist;
