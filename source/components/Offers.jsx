import React from 'react';
import { assets } from '../assets/assets';

const offers = [
  {
    id: 1,
    title: 'Summer Escape Package',
    desc: 'Enjoy a complimentary night and daily breakfast',
    discount: '25% OFF',
    expiry: 'Expires Aug 31',
    image: assets.offer1,
  },
  {
    id: 2,
    title: 'Romantic Getaway',
    desc: 'Special couples package including spa treatment',
    discount: '20% OFF',
    expiry: 'Expires Sep 20',
    image: assets.offer2,
  },
  {
    id: 3,
    title: 'Luxury Retreat',
    desc: 'Book 60 days in advance and save on your stay at any of our luxury properties worldwide.',
    discount: '30% OFF',
    expiry: 'Expires Sep 25',
    image: assets.offer3,
  },
];

const Offers = () => (
  <section className="py-16">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold">Exclusive Offers</h2>
        <a href="#" className="font-semibold text-black hover:underline flex items-center gap-1 text-base md:text-lg">View All Offers <span aria-hidden>→</span></a>
      </div>
      <p className="text-gray-500 mb-8 max-w-2xl">Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.</p>
      <div className="flex flex-wrap gap-8 justify-start">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative rounded-2xl overflow-hidden shadow-lg w-full max-w-xs min-h-[280px] flex flex-col justify-end bg-gray-200"
            style={{ backgroundImage: `url(${offer.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />
            {/* Discount Badge */}
            <span className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-semibold px-3 py-1 rounded-full z-10 shadow">{offer.discount}</span>
            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col h-full justify-end">
              <h3 className="font-playfair text-2xl font-semibold text-white mb-2 leading-tight">{offer.title}</h3>
              <p className="text-white text-base font-medium mb-2 leading-snug">{offer.desc}</p>
              <div className="text-sm text-gray-200 mb-6">{offer.expiry}</div>
              <a href="#" className="font-bold text-white flex items-center gap-2 text-base hover:underline">View Offers <span aria-hidden>→</span></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Offers; 