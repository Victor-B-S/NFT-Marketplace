import React from 'react'
import Navbar from '../components/Navbar/navbar'
import Footer from '../components/Footer/footer'
import BrowseCateg from '../components/BrowseCategories/BrowseCateg'
import CardCateg from '../components/UI/CardCateg'

export default function () {
  return (
    <div>
      <Navbar />
      <BrowseCateg />
      <Footer />
    </div>
  )
}
