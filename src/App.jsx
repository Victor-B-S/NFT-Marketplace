import './index.css'
import CardCateg from './components/UI/CardCateg';
import BrowseCateg from './components/BrowseCategories/BrowseCateg';
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Browse from './components/Browse'
import NftHighlight from './components/NftHighlight/NftHighlight';

function App() {
  return (
    <div className="app">
      <Navbar />
      <NftHighlight />
    </div>
  )
}

export default App;