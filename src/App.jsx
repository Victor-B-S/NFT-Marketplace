import './index.css'
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Home from './components/Home/home'
import Account from './components/Connect/Account'
import ArtistPage from './components/ArtistPage/artistPage'

import React, { useState, useEffect } from 'react'

export default function App() {

  const [pagina, setPagina] = useState('home')

  useEffect(() => {
    const url = window.location.href
    const res = url.split('/')
    setPagina(res[res.length - 1])
  }, [])

  const viewPagina = () => {
    switch (pagina) {
      case 'artistPage':
        return <ArtistPage />
      case 'connect':
        return <Account forWhat={'Connect'} />
      case 'signUp':
        return <Account forWhat={'Create'} />
      default:
        return <Home />
    }
  }

  return (
    <>
      <Navbar />
      {viewPagina()}
      <Footer />
    </>
  )
}
