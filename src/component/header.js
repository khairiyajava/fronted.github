import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
 function Header() {
  return (
    <div>
         <nav class="navbar">
   
    <div class="logo">Online clearance System</div>

   
    <ul class="nav-links">

      
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

     
      <div class="menu">

        <li><a href="./index.html">Home</a></li>
        <li><a href="./Recipe.html">Student</a></li>
        <li><a href="./Login.html">Log out</a></li>
        
      </div>
    </ul>
  </nav>
    </div>
  )
}

export default Header