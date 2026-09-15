import { useState } from 'react'
import {Routes ,Routes,BrowserRouter} from react-router-dom
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
    <BrowserRouter>
     <Routes>
      <Route></Route>
      <Route></Route>
      <Route></Route>
     </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
