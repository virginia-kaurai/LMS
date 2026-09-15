import { useState } from 'react'
import {Route ,Routes,BrowserRouter} from "react-router-dom"
import Homepage from "./Homepage.jsx"
import Register from "./Register.jsx"
import Login from "./Login.jsx"
import AdminPortal from "./AdminPortal.jsx"
import StudentsPortal from "./StudentsPortal.jsx"
import StaffPortal from "./StaffPortal.jsx"


function App() {
 

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Homepage/>} />
       <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/AdminPortal" element={<AdminPortal/>} />
        <Route path="/StudentsPortal" element={<StudentsPortal/>} />
        <Route path="/StaffPortal" element={<StaffPortal/>} />

     </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
