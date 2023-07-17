import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import BrowseCateg from '../components/BrowseCategories/BrowseCateg'
import HowWorks from '../components/HowItWorks/HowItWorks'
import NFTHighlight from '../components/NftHighlight/NftHighlight'
// import Trending from '../components/TrendingCollection/TrendingCollection';
import Hero from '../components/Hero/Hero'
import Subscribe from '../components/Subscribe'
import Tops from '../components/TopCreators/Top'
import Discover from '../components/Discover/Discover'
import Trending from '../components/TrendingCollection/TrendingCollection'

export default function () {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
      <Tops />
      <BrowseCateg />
      <Discover />
      <NFTHighlight />
      <HowWorks />
      <Subscribe />
      <Footer />
    </div>
  )
}
