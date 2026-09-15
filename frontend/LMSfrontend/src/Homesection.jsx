import React from 'react'
import studentsImg from './assets/students.jpg'


function Homesection() {
  return (
<>
    <div className='w-full h-screen flex justify-start items-center relative bg-gradient-to-r from-blue-950 to-transparent'>

      <img src={studentsImg} alt="Students" className='w-full h-full object-cover absolute mix-blend-overlay ' />

 <div className=" ml-5  relative z-10">
    <h1 className='text-5xl font-bold text-white z-10'>School Management System</h1><br></br>
    <p className='text-3xl text-white z-10 mt-4'>Welcome to the School Management System</p><br></br>
    <p className='text-white'>Resounding a Vision with Excellence</p>

    </div>
   
    </div>

   

    </>
   
  )
}

export default Homesection