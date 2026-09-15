import { useState } from 'react'
import {Routes ,Routes,BrowserRouter} from react-router-dom
import Homepage from "./Homepage.jsx"
import 

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Homepage/>} />
       <Route path="/Register" element={<Registrationpage/>} />
        <Route path="/Login" element={<Loginpage/>} />
        <Route path="/AdminPortal" element={<AdminPortal/>} />
        <Route path="/StudentsPortal" element={<StudentsPortal/>} />
        <Route path="/StaffPortal" element={<StaffPortal/>} />

     </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
