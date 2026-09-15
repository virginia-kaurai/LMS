import { useState } from 'react'
import Navbar from "./navbar.jsx"
import Homesection from "./Homesection.jsx"
import Cards from "./cards.jsx"
import Programs  from './programs.jsx'
import Stats from './statistics.jsx'
import Contact from "./contact.jsx"
import Footer from "./Footer.jsx"

function App() {
 

  return (
    <>
    <Navbar/>
    <Homesection/>
    <Cards/>
    <Programs/>
    <Stats/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
