import React from 'react'
import './index.css'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import './App.css'
import Marketplace from './components/Marketplace'


function App() {

  return (
    <div className="app">
      <Navbar />
      <Marketplace />
      <Footer />
    </div>
  )
}

export default App
