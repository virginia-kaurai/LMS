import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar.jsx"
import Homesection from "./components/Homesection.jsx"
import Cards from "./components/cards.jsx"
import Programs  from './components/programs.jsx'
import Stats from './components/statistics.jsx'
import Contact from "./components/contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
 

  return (
    <div className="">
        <nav>
    <Navbar/>
    <section id="home"><Homesection /></section>
      <section id="cards"><Cards /></section>
      <section id="programs"><Programs /></section>
      <section id="stats"><Stats /></section>
      <section id="contact"><Contact /></section>
    <Footer/>
    </nav>
    </div>
  )
}

export default App
