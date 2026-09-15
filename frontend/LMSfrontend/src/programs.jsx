import React from 'react'

const programs = [
  "Computer Science",
  "Business Administration",
  "Nursing & Health Sciences",
  "Engineering",
  "Education",
  "Law",
  "Agriculture",
  "Hospitality Management"
]

function Programs() {
  return (
    <div className='p-6 max-w-4xl mx-auto'>
      <h1 className='text-3xl md:text-4xl font-bold text-black mb-8 text-center'>
        Our Programs
      </h1>

      <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {programs.map((program, index) => (
          <li
            key={index}
            className='flex items-center gap-3 bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-900 hover:shadow-lg hover:translate-x-1 transition-all duration-300'
          >
            
            <span className='text-gray-700 text-lg font-medium'>{program}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Programs