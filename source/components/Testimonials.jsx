import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Emma Rodriguez',
    location: 'Barcelona, Spain',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that EliteStay provides.",
  },
  {
    id: 2,
    name: 'Liam Smith',
    location: 'London, UK',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    review: "EliteStay made my vacation planning effortless. The hotel selection is top-notch and the offers are unbeatable!",
  },
  {
    id: 3,
    name: 'Sophia Lee',
    location: 'Seoul, South Korea',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    review: "Exceptional service and beautiful properties. I highly recommend EliteStay for anyone seeking a luxury getaway.",
  },
];

const Testimonials = () => (
  <section className="bg-[#f6fbff] py-16">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-2">What Our Guests Say</h2>
      <p className="text-center text-gray-500 mb-8">Discover why discerning travelers choose EliteStay for their luxury accommodations around the world.</p>
      <div className="flex flex-wrap gap-6 justify-center">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white rounded-xl shadow p-6 w-80 flex flex-col items-center text-center">
            <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full mb-3 object-cover" />
            <div className="flex items-center justify-center mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
              ))}
            </div>
            <p className="font-semibold mb-1">{t.name}</p>
            <p className="text-xs text-gray-400 mb-2">{t.location}</p>
            <p className="text-gray-600 text-sm">{t.review}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;