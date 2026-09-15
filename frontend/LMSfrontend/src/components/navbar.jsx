import LOGO from './assets/logo.jpeg'
import { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
function Navbar(){
    

  const [isOpen,setisOpen] = useState(false);


 return(
< div className="grid grid-cols-2 lg:grid-cols-3  items-center px-6 py-6 md:px-32 bg-cream  mb-8">

 
  <nav className=" flex  justify-center justify-self-start  ">
    <img src={LOGO} className="w-16 h-16 sm:w-18sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24   border-rose-300 rounded-full" >
    </img>
    <h1 className='text-lg sm:text-xl md:text-2xl font-semibold text-rose  p-4'>School System</h1>




     
<div className="hidden lg:flex items-center gap-8 justify-self-center">
  <ul className="flex items-center gap-8">
    <li><a href="#home" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">Home</a></li>
    <li><a href="#about" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">About</a></li>
    <li><a href="#menu" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">Academics</a></li>
    <li><a href="#gallery" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">Gallery</a></li>
    <li><a href="#contact" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">Contact</a></li>

    <li className="relative group">
      <button className="text-charcoal hover:text-rose transition-colors font-monserat px-4 flex items-center gap-1">
        Portals
        <svg className="w-3 h-3 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>
      <ul className="absolute left-0 top-full mt-2 w-40 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <li><a href="#student" className="block px-4 py-2 text-charcoal hover:text-rose hover:bg-gray-50 font-monserat text-sm">Student portal</a></li>
        <li><a href="#admin" className="block px-4 py-2 text-charcoal hover:text-rose hover:bg-gray-50 font-monserat text-sm">Admin portal</a></li>
        <li><a href="#staff" className="block px-4 py-2 text-charcoal hover:text-rose hover:bg-gray-50 font-monserat text-sm">Staff portal</a></li>
      </ul>
    </li>
  </ul>
</div>

  


  <div class="hidden lg:flex justify-self-end items-center gap-4 ">
    <button class="text-charcoal font-medium px-4 py-2 hover:text-rose transition-colors font-monserat">
      Login
    </button>
    <button class=" text-charcoal font-monserat font-medium px-4 py-2 rounded-t-full rounded-b-full hover:border border-xl border-rose transition-colors">
      Sign Up
    </button>
    
  </div>

  <div>


     <button
          className="justify-self-end p-8  text-3xl text-rose-500 lg:hidden "
          onClick={() => setisOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
  </div>


 {isOpen && (

        <div className="lg:hidden mt-6 border-t border-rose-200 pt-6">

          <ul className="flex flex-col gap-5 text-center">

            <li>
              <a href="#home" className="hover:text-rose">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-rose">
                About
              </a>
            </li>

            <li>
              <a href="#menu" className="hover:text-rose">
                Menu
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-rose">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-rose">
                Contact
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-rose">
                Student Portal
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-rose">
                Admin Portal
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-rose">
                staff Portal
              </a>
            </li>

          </ul>

          <div className="flex flex-col gap-3 mt-8">

            <button className="border border-rose  px-8  m-3 text-xs uppercase tracking-[0.3em] text-charcoal rounded-full py-2 bg-white">
              Login
            </button>

            <button className="bg-rose text-white  rounded-full py-2 m-3 text-xs uppercase tracking-[0.3em]">
              Sign Up
            </button>

          </div>

        </div>

      )}
  </nav>

  
  
  
</div>


)}

export default Navbar