import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { hotelsDummyData } from '../assets/assets';

const HotelDetails = () => {
    const { id } = useParams();
    const hotel = hotelsDummyData.find(h => h.id === Number(id));
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState({ name: '', email: '' });
    const [confirmed, setConfirmed] = useState(false);

    if (!hotel) {
        return <div className="p-8 text-center">Hotel not found.</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setConfirmed(true);
    };

    return (
        <div className="max-w-2xl mx-auto p-8">
            <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover rounded-xl mb-6" />
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            <p className="text-gray-600 mb-2">{hotel.location}</p>
            <p className="text-blue-600 font-bold mb-4">${hotel.price} / night</p>
            <p className="mb-6">{hotel.description}</p>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => setShowModal(true)}>Book Now</button>

            {/* Booking Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-8 shadow-lg w-full max-w-md relative">
                        <button className="absolute top-2 right-3 text-gray-500 text-2xl" onClick={() => { setShowModal(false); setConfirmed(false); }}>&times;</button>
                        {confirmed ? (
                            <div className="text-center">
                                <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
                                <p className="mb-4">Thank you, {form.name || 'Guest'}!<br/>A confirmation has been sent to {form.email || 'your email'}.</p>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg" onClick={() => { setShowModal(false); setConfirmed(false); }}>Close</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold mb-2">Book {hotel.name}</h2>
                                <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={handleChange} className="border rounded px-3 py-2" required />
                                <input name="email" type="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="border rounded px-3 py-2" required />
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg">Confirm Booking</button>
                            </form>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HotelDetails; 