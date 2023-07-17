import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import BrowseCateg from '../components/BrowseCategories/BrowseCateg'
import HowWorks from '../components/HowItWorks/HowItWorks'

export default function () {
  return (
    <div>
      <Navbar />
      <BrowseCateg />
      <HowWorks />
      <Footer />
    </div>
  )
}
