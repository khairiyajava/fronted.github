import React, { useState } from 'react';
import './form.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
 function Student() {
  const [inputStudentname, setStudentname]=useState(['']);
  const [inputStu_Id, setstu_Id]= useState(['']);
  const [inputStudentdate,setStudentdate]= useState(['']);
  const [inputStudentenrollment_status,setStudentenrollment_status]= useState(['']);
  const navigate = useNavigate();
  const handleSubmit =(event)=>{
    event.preventDefault();
    const requestdata={
      name:inputStudentname,
      date:inputStudentdate,
      enrollment_status:inputStudentenrollment_status,


    };
    axios.post("http://localhost:8090/api/V1/insert",requestdata).then(Response=>{
      console.log(Response.data);
      navigate("/edit");
    }).catch(Error=>{
      console.error(Error);
    })
  }

  return (
    <div class="form-container">
    
    <h2>Add Student</h2>
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="studentName">Name:</label>
        <input type="text" id="studentName" name="studentName" value={inputStudentname} onChange={event=>setStudentname(event.target.value)}required/>
      </div>
     
     
      
      <div class="form-group">
        <label for="gradYear">Year of Graduation:</label>
        <input type="date" id="gradYear" name="gradYear" value={inputStudentdate} onChange={event=>setStudentdate(event.target.value)} required/>
      </div>
      <div class="form-group">
        <label for="gradYear">Enrollment_status:</label>
        <input type="text" id="status" name="status" value={inputStudentenrollment_status} onChange={event=>setStudentenrollment_status(event.target.value)} required/>
      </div>
      <div class="form-group">
      <button className="btn btn-info add-button" type="submit" >Submit</button>
      <Link to="/ad" className="btn btn-info add-button" type="submit" >Cancel</Link>
        {/* <input type="submit" value="Submit"/> */}
      </div>
    </form>
  </div>
  )
}
export default Student
