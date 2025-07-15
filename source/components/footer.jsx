import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-800 via-indigo-900 to-purple-900 pt-0 pb-4 text-gray-200 text-sm overflow-hidden">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,0V46.29c47.29,22,104.09,29.05,158,17.39C267.75,44.15,327.5,0,400,0s132.25,44.15,242,63.68C696.91,92.34,753.71,85.29,800,63.68c54-24.66,112.5-63.68,185-63.68s131,39.02,215,63.68V0Z" opacity=".3" fill="#fff" />
        </svg>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-10 bg-white/10 backdrop-blur-xl rounded-3xl mt-8 pt-10 pb-6 shadow-2xl border border-white/20">
        {/* Left: Logo & Description */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <img src={assets.logo} alt="EliteStay Logo" className="w-10 h-10 drop-shadow-lg" />
            <span className="font-bold text-xl tracking-wide drop-shadow">EliteStay</span>
          </div>
          <p className="mb-2 text-gray-100/80">Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="hover:scale-110 transition-transform"><img src={assets.instagramIcon} alt="Instagram" className="w-6 h-6" /></a>
            <a href="#" aria-label="Twitter" className="hover:scale-110 transition-transform"><img src={assets.twitterIcon} alt="Twitter" className="w-6 h-6" /></a>
            <a href="#" aria-label="Facebook" className="hover:scale-110 transition-transform"><img src={assets.facebookIcon} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:scale-110 transition-transform"><img src={assets.linkendinIcon} alt="LinkedIn" className="w-6 h-6" /></a>
          </div>
        </div>
        {/* Center: Links with vertical divider */}
        <div className="flex flex-1 justify-between min-w-[320px] gap-8 border-l border-r border-white/20 px-8">
          <div>
            <h4 className="font-semibold mb-2 text-gray-100 text-base tracking-wide">COMPANY</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">About</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">Careers</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">Press</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">Blog</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-gray-100 text-base tracking-wide">SUPPORT</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">Help Center</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">Safety Information</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">Cancellation Options</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">Contact Us</a></li>
              <li><a href="#" className="hover:underline hover:text-blue-300 transition">Accessibility</a></li>
            </ul>
          </div>
        </div>
        {/* Right: Newsletter */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-3">
          <h4 className="font-semibold mb-2 text-gray-100 text-base tracking-wide">STAY UPDATED</h4>
          <p className="mb-2 text-gray-100/80">Subscribe to our newsletter for travel inspiration and special offers.</p>
          <form className="flex w-full max-w-xs">
            <div className="relative w-full flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" /></svg>
              </span>
              <input type="email" placeholder="Your email" className="pl-12 pr-4 py-2 rounded-full border border-white/30 bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-blue-300 transition w-full" />
            </div>
            <button type="submit" className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 focus:ring-2 focus:ring-blue-300 transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" /></svg>
            </button>
          </form>
        </div>
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-white/20 flex flex-col md:flex-row items-center justify-between text-xs text-gray-300 gap-2">
        <span>© 2025 EliteStay. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:underline hover:text-blue-300 transition">Privacy</a>
          <a href="#" className="hover:underline hover:text-blue-300 transition">Terms</a>
          <a href="#" className="hover:underline hover:text-blue-300 transition">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 