import React from 'react'

const cardData = [
  {
    title: "School Description",
    text: "Our school is committed to nurturing young minds through quality education, strong values, and a supportive learning environment. We believe every student deserves the tools and guidance to reach their full potential, both academically and personally."
  },
  {
    title: "School Mission",
    text: "To be a leading institution that shapes confident, knowledgeable, and responsible individuals ready to make a positive impact on the world."
  },
  {
    title: "School Vision",
    text: "To provide a safe, inclusive, and inspiring environment where students grow intellectually, socially, and morally — guided by dedicated educators and a curriculum that prepares them for lifelong success."
  },
  {
    title: "Motto",
    text: "Excellence Through Knowledge and Character"
  }
]

function Cards() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 mt-8'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className='bg-white rounded-xl shadow-lg shadow-blue-200 p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200'
        >
          <h1 className='text-2xl md:text-3xl font-bold text-black mb-3'>
            {card.title}
          </h1>
          <p className='text-gray-500 text-base md:text-lg leading-relaxed'>
            {card.text}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Cards