import './index.css'
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import ArtistPageLink from './pages/artistpage';
import MarketplaceLink from './pages/marketplace';
import Account from './pages/connect';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path='/artist-page' element={<ArtistPageLink />}/>
      <Route path='/marketplace' element={<MarketplaceLink />}/>
      <Route path='/create-account' element={<Account forWhat='Create'/>}/>
      <Route path='/connect-wallet' element={<Account forWhat='Connect'/>}/>
    </Routes>
  )
}
