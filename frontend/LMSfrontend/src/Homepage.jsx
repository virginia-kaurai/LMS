import { useState } from 'react'

import Navbar from "./components/navbar.jsx"
import Homesection from "./components/Homesection.jsx"
import Cards from "./components/cards.jsx"
import Programs  from './components/programs.jsx'
import Stats from './components/statistics.jsx'
import Contact from "./components/contact.jsx"
import Footer from "./components/Footer.jsx"

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
