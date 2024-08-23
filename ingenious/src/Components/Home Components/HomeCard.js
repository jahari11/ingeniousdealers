import React from 'react'
import HomeCardData from './HomeCardData'
import { Link } from 'react-router-dom'

const HomeCard = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-6 mb-6'>
        {HomeCardData.map((card, index) =>
         <Link to = {card.link}>
        <div className="w-full max-w-xs overflow-hidden bg-black rounded-lg hover:shadow-2xl transition-all">
     
      <img className="object-cover w-full h-56" src={card.img} alt={card.title} />

      <div className="py-5 text-center">
              <span className="text-lg text-white font-semibold">{card.title}</span>
      </div>
    </div>
    </Link>
  )}
    </div>
  )
}

export default HomeCard