import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={'/rooms/' + room._id}
      onClick={() => scrollTo(0, 0)}
      key={room._id}
      className="relative w-72 bg-white rounded-xl shadow flex-shrink-0 hover:scale-105 transition-transform duration-200 overflow-hidden text-gray-800 inline-block"
    >
      <img src={room.images[0]} alt="" className="w-full h-44 object-cover" />
      {index % 2 === 0 && (
        <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow">Best Seller</p>
      )}
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <p className="font-playfair text-lg font-semibold text-gray-800">{room.hotel.name}</p>
          <div className="flex items-center gap-1 text-sm">
            <img src={assets.starIconFilled} alt="star-icon" className="w-4 h-4" />
            <span className="text-gray-700 font-medium">4.5</span>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
          <span>{room.hotel.address}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p><span className="text-lg text-gray-800 font-bold">${room.pricePerNight}</span><span className="text-sm text-gray-500 font-normal">/night</span></p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-100 transition-all cursor-pointer">Book Now</button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;