import React from 'react'
import './index.css'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
// import Marketplace from './components/Marketplace'
import ArtistPage from './components/ArtistPage/ArtistPage'


function App() {

  return (
    <div className="app">
      <Navbar />
      <ArtistPage />
      <Footer />
    </div>
  )
}

export default App
