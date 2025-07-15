import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { hotelsDummyData } from '../assets/assets';

function filterHotels(hotels, params) {
    return hotels.filter(hotel => {
        // Filter by destination (case-insensitive substring match)
        if (params.destination && !hotel.location.toLowerCase().includes(params.destination.toLowerCase())) {
            return false;
        }
        // Filter by guests (if provided)
        if (params.guests && Number(params.guests) > 4) {
            return false; // Only allow up to 4 guests in dummy data
        }
        // You can add more filters for checkIn, checkOut if you want to simulate availability
        return true;
    });
}

const AllRooms = () => {
    const { search } = useLocation();
    const params = Object.fromEntries(new URLSearchParams(search));
    const filteredHotels = filterHotels(hotelsDummyData, params);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-8 text-center">All Hotels</h1>
            {filteredHotels.length === 0 ? (
                <p className="text-center text-gray-500">No hotels found matching your search.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredHotels.map(hotel => (
                        <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <Link to={`/hotels/${hotel.id}`}>
                                <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover hover:opacity-90 transition" />
                            </Link>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    <Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link>
                                </h2>
                                <p className="text-gray-600 mb-1">{hotel.location}</p>
                                <p className="text-blue-600 font-bold mb-2">${hotel.price} / night</p>
                                <Link to={`/hotels/${hotel.id}`} className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllRooms;