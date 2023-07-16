import './index.css'
import CardCateg from './components/UI/CardCateg';
import BrowseCateg from './components/BrowseCategories/BrowseCateg';
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import ArtistPageLink from './pages/artistpage';
import MarketplaceLink from './pages/marketplace';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/artist-page' element={<ArtistPageLink />}/>
      <Route path='/marketplace' element={<MarketplaceLink />}/>
    </Routes>
  )
}

export default App;