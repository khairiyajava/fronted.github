import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Eddit() {
  const {stu_Id} = useParams();
  const[data,setData] = useState({});
  const navigate = useNavigate();
  useEffect(()=>{
    const fetchdataById = async()=>{
      try{
        const response = await axios.get(`http://localhost:8090/api/V1/getbyId/${stu_Id}`);
        setData(response.data);
      }catch(error){
        console.log(error)
      }
    };
    fetchdataById();
  },[stu_Id]);

  function handelSubmit(event){
    
    event.preventDefault();
    axios.put(`http://localhost:8090/api/V1/update/${stu_Id}`,data);
    navigate("/edit");
  }

    



  return (
    <div>
        <div class="form-container">
    <h2>Edit Student</h2>
    <form onSubmit={handelSubmit}>
      <div class="form-group">
        <label for="studentName">Name:</label>
        <input type="text" value={data.name} onChange={event=>setData({...data,name:event.target.value})}/>
        {/* <input type="text" id="studentName" name="studentName" required/> */}
      </div>
      <div class="form-group">
        
        <input type="hidden" value={data.stu_Id} onChange={event=>setData({...data, stu_Id:event.target.value})}/>
        {/* <input type="text" id="studentID" name="studentID" required/> */}
      </div>
    
      
      <div class="form-group">
        <label for="gradYear">Year of Graduation:</label>
        <input type="text" value={data.date} onChange={event=>setData({...data,date:event.target.value})}/>
        {/* <input type="date" id="gradYear" name="gradYear" required/> */}
      </div>
      <div class="form-group">
      <button className="btn btn-info add-button" type="submit" >Save</button>
      <Link to="/edit" className="btn btn-info add-button" type="submit" >Cancel</Link>
      <Link  type='button' className='btn5 btn-info  btn-info EDIT'></Link>
        {/* <input type="submit" value="Submit"/> */}
      </div>
    </form>
  </div>
    </div>
  )
}
export default Eddit
