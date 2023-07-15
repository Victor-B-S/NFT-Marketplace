import React from 'react'
import './index.css'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Marketplace from './components/Marketplace'
import CoverProfile from './components/CoverProfile/CoverProfile'


function App() {

  return (
    <div className="app">
      <Navbar />
      <CoverProfile />
      <Footer />
    </div>
  )
}

export default App
