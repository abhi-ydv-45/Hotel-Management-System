import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home';
import MyBookings from './components/MyBookings';
import Footer from './components/Footer';

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/my-bookings' element={<MyBookings/>} />
        </Routes>
      </div>
      {!isOwnerPath && <Footer />}
    </div>
  )
}

export default App