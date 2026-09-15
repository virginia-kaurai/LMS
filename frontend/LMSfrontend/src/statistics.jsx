import React from 'react'

const stats = [
  { label: "Total Students", value: "1200" },
  { label: "Total Teachers", value: "85" },
  { label: "Total Courses", value: "40" }
]

function Stats() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 p-6'>
      {stats.map((stat, index) => (
        <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center'>
          <h3 className='text-lg font-semibold text-slate-900'>{stat.label}</h3>
          <p className='text-4xl font-bold text-amber-600 mt-2'>{stat.value}</p>
        </div>
      ))}
    </div>
  )
}

export default Stats