import React from 'react'

function Footer() {
  return (
    <footer className='bg-blue-900 text-white'>
      <div className='max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>

        {/* About */}
        <div>
          <h2 className='text-2xl font-bold mb-4'>School Name</h2>
          <p className='text-gray-300 leading-relaxed'>
            Nurturing young minds through quality education, strong values, and a supportive learning environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2'>
            <li><a href="/" className='text-gray-300 hover:text-white transition-colors'>Home</a></li>
            <li><a href="/about" className='text-gray-300 hover:text-white transition-colors'>About Us</a></li>
            <li><a href="/programs" className='text-gray-300 hover:text-white transition-colors'>Programs</a></li>
            <li><a href="/admissions" className='text-gray-300 hover:text-white transition-colors'>Admissions</a></li>
            <li><a href="/contact" className='text-gray-300 hover:text-white transition-colors'>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
          <ul className='space-y-2 text-gray-300'>
            <li>123 School Lane, Nairobi, Kenya</li>
            <li>+254 700 000 000</li>
            <li>info@schoolname.ac.ke</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
          <div className='flex gap-4'>
            <a href="#" className='w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors'>F</a>
            <a href="#" className='w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors'>T</a>
            <a href="#" className='w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors'>I</a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className='border-t border-white/20 py-4 text-center text-gray-300 text-sm'>
        &copy; {new Date().getFullYear()} School Name. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer