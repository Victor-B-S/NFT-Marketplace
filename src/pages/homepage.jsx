import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import BrowseCateg from '../components/BrowseCategories/BrowseCateg'
import HowWorks from '../components/HowItWorks/HowItWorks'
import NFTHighlight from '../components/NftHighlight/NftHighlight'
// import Trending from '../components/TrendingCollection/TrendingCollection'
import Hero from '../components/Hero/Hero'
import Tops from '../components/TopCreators/Top'

export default function () {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tops />
      <BrowseCateg />
      <NFTHighlight />
      <HowWorks />
      <Footer />
    </div>
  )
}
