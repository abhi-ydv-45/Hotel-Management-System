import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'

const FeaturedDestination = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
      {/* Decorative Image or Section Icon */}
      <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mb-4 text-blue-400">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
      <h2 className="text-3xl font-bold mb-10 text-gray-800">Featured Destinations</h2>
      <div className='flex flex-wrap gap-8 w-full pb-4 justify-center'>
        {roomsDummyData.map((room, index)=>(
          <HotelCard key={room._id} room={room} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedDestination