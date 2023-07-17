import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import BrowseCateg from '../components/BrowseCategories/BrowseCateg'
import HowWorks from '../components/HowItWorks/HowItWorks'
import NFTHighlight from '../components/NftHighlight/NftHighlight'

export default function () {
  return (
    <div>
      <Navbar />
      <BrowseCateg />
      <NFTHighlight />
      <HowWorks />
      <Footer />
    </div>
  )
}
