import React from 'react'
import { Link } from 'react-router-dom'

function Eddit() {
  return (
    <div>
        <div class="form-container">
    <h2>Edit Student</h2>
    <form>
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
      <Link className="btn btn-info add-button" type="submit" >Save</Link>
      <Link to="/edit" className="btn btn-info add-button" type="submit" >Cancel</Link>
        {/* <input type="submit" value="Submit"/> */}
      </div>
    </form>
  </div>
    </div>
  )
}
export default Eddit
