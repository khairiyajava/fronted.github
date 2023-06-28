import React, { useState } from 'react';
import './form.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
 function Student() {
  const [inputStudentname, setStudentname]=useState(['']);
  const [inputStu_Id, setstudentId]= useState(['']);
  const [inputStudentdate,setStudentdate]= useState(['']);
  const [inputStudentenrollment_status,setStudentenrollment_status]= useState(['']);
  const navigate = useNavigate();
  const handleSubmit =(event)=>{
    event.preventDefault();
    const requestdata={
      Studentname:inputStudentname,
      StudentId:inputStu_Id,
      Studentdate:inputStudentdate,
      Studentenrollment_status:inputStudentenrollment_status,


    };
    axios.post("http://localhost:8090/api/V1/insert",requestdata).then(Response=>{
      console.log(response.data);
      navigate("/action");
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
        <input type="text" id="studentName" name="studentName" required/>
      </div>
      <div class="form-group">
        <label for="studentID">Student ID:</label>
        <input type="text" id="studentID" name="studentID" required/>
      </div>
      <div class="form-group">
        
       
      </div>
      
      <div class="form-group">
        <label for="gradYear">Year of Graduation:</label>
        <input type="date" id="gradYear" name="gradYear" required/>
      </div>
      <div class="form-group">
      <Link to="/add" className="btn btn-info add-button" type="submit" >Submit</Link>
      <Link to="/ad" className="btn btn-info add-button" type="submit" >Cancel</Link>
        {/* <input type="submit" value="Submit"/> */}
      </div>
    </form>
  </div>
  )
}
export default Student
