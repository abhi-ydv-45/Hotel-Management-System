import React from 'react';

const Newsletter = () => (
  <section className="relative bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 py-24 flex items-center justify-center min-h-[400px] overflow-hidden">
    {/* Decorative floating shapes */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse z-0" />
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl animate-pulse z-0" />
    <div className="relative w-full max-w-2xl mx-auto px-6 z-10">
      {/* Card */}
      <div className="bg-white/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-12 pt-20 text-center border border-white/30 relative">
        {/* Custom SVG Icon */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full p-5 shadow-lg border-4 border-white/30 flex items-center justify-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M8 24L40 8L32 40L22.5 29.5L8 24Z" fill="#fff" fillOpacity="0.9"/>
              <path d="M8 24L40 8L32 40L22.5 29.5L8 24Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M22.5 29.5L28 20L18 26L22.5 29.5Z" fill="#2563EB" fillOpacity="0.7"/>
              <circle cx="36" cy="12" r="2" fill="#60A5FA" />
              <circle cx="14" cy="34" r="1.5" fill="#fff" fillOpacity="0.7" />
              <circle cx="30" cy="38" r="1" fill="#fff" fillOpacity="0.5" />
            </g>
          </svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-3 text-white drop-shadow-lg mt-2">Stay Inspired</h2>
        <p className="mb-10 text-gray-100 text-lg md:text-xl">Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.</p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-2">
          <div className="relative w-full flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" /></svg>
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-12 pr-5 py-3 rounded-full text-black focus:outline-none shadow-md border border-white/40 bg-white/80 focus:ring-2 focus:ring-blue-300 transition"
              required
            />
          </div>
          <button type="submit" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-300 transition-all duration-200 animate-glow">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-200 mt-4">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
      </div>
    </div>
  </section>
);

export default Newsletter; 