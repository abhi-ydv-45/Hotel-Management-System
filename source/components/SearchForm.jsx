import React from 'react';

const SearchForm = ({ values, onChange, onSearch }) => {
    return (
        <form onSubmit={onSearch} className='w-full max-w-3xl bg-white/70 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl px-4 py-4 flex flex-col md:flex-row items-stretch gap-4 md:gap-3 transition-all duration-300'>
            {/* Destination */}
            <div className='flex flex-col flex-grow'>
                <div className='flex items-center gap-2 mb-1'>
                    <svg className="w-5 h-5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="destinationInput" className="font-semibold text-gray-800">Destination</label>
                </div>
                <input list='destinations' id="destinationInput" name="destination" type="text" className="rounded-lg border border-gray-200 px-4 h-12 text-sm outline-none bg-white/80 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 shadow-sm w-full" placeholder="Type here" required value={values.destination} onChange={onChange} />
            </div>

            {/* Check in */}
            <div className='flex flex-col flex-grow'>
                <div className='flex items-center gap-2 mb-1'>
                    <svg className="w-5 h-5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkIn" className="font-semibold text-gray-800">Check in</label>
                </div>
                <input id="checkIn" name="checkIn" type="date" className="rounded-lg border border-gray-200 px-4 h-12 text-sm outline-none bg-white/80 text-gray-900 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 shadow-sm w-full" value={values.checkIn} onChange={onChange} />
            </div>

            {/* Check out */}
            <div className='flex flex-col flex-grow'>
                <div className='flex items-center gap-2 mb-1'>
                    <svg className="w-5 h-5 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
                    </svg>
                    <label htmlFor="checkOut" className="font-semibold text-gray-800">Check out</label>
                </div>
                <input id="checkOut" name="checkOut" type="date" className="rounded-lg border border-gray-200 px-4 h-12 text-sm outline-none bg-white/80 text-gray-900 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 shadow-sm w-full" value={values.checkOut} onChange={onChange} />
            </div>

            {/* Guests */}
            <div className='flex flex-col flex-grow max-w-[110px]'>
                <label htmlFor="guests" className="font-semibold text-gray-800 mb-1">Guests</label>
                <input min={1} max={4} id="guests" name="guests" type="number" className="rounded-lg border border-gray-200 px-4 h-12 text-sm outline-none bg-white/80 text-gray-900 focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition-all duration-200 shadow-sm w-full" placeholder="0" value={values.guests} onChange={onChange} />
            </div>

            {/* Search Button */}
            <button type="submit" className='flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 h-12 px-7 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all focus:ring-2 focus:ring-blue-200 outline-none my-auto max-md:w-full max-md:py-2 min-w-[120px]' >
                <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                </svg>
                <span>Search</span>
            </button>
        </form>
    );
}

export default SearchForm; 