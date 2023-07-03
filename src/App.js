
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import './App.css';
// import Student from './pages/student';
import Footer from './component/footer';
import Header from './component/header';
import Glist from './pages/Glist';
import Student from './pages/student';
import Eddit from './pages/eddit';






function App() {
  return (
    <div >
  
       <BrowserRouter>
     
      <Header/>
   
        <Routes>
          <Route exact path='/' element={<Glist/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/ed/:stu_Id' element={<Eddit/>}/>
          <Route path='/ad' element={<Glist/>}/>
          <Route path='/edit' element={<Glist/>}/>
        </Routes>
      </BrowserRouter> 
     <Footer/>
    </div>
  );
}

export default App;
