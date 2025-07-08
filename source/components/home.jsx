import React from 'react'
import { assets, roomsDummyData } from '../assets/assets';
import HotelCard from './HotelCard';
import Offers from './Offers';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import SearchForm from './SearchForm';

const Home = () => {
  // Remove refs, use state for check-in and check-out
  const [checkIn, setCheckIn] = React.useState('');
  const [checkOut, setCheckOut] = React.useState('');
  return (
    <>
      {/* Hero Section */}
      <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen' style={{backgroundImage: `url(${assets.heroImage})`}}>
        <p className='bg-[#49B9FF]/50 px-3.5 py-1 rounded-full mt-20'>The Ultimate Hotel Experience</p>
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>Discover Your Perfect Getaway Destination</h1>
        <p className='max-w-130 mt-2 text-sm md:text-base mb-8'>Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today with EliteStay.</p>
        <SearchForm />
      </div>

      {/* Featured Hotels Section */}
      <section className="bg-[#f6fbff] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-2">Featured Hotels</h2>
          <p className="text-center text-gray-500 mb-8">Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {roomsDummyData.map((room, idx) => (
              <HotelCard key={room._id} room={room} index={idx} />
            ))}
          </div>
          <div className="flex justify-center">
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-all">View All Hotels</button>
          </div>
        </div>
      </section>

      {/* Exclusive Offers Section */}
      <Offers />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter/Stay Inspired Section */}
      <Newsletter />
    </>
  )
}

export default Home