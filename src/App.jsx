import './index.css'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import ArtistPageLink from './pages/artistpage';
import MarketplaceLink from './pages/marketplace';
import React, { useState, useEffect } from 'react'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/artist-page' element={<ArtistPageLink />}/>
      <Route path='/marketplace' element={<MarketplaceLink />}/>
    </Routes>
  )
}
