import './index.css'
import CardCateg from './components/UI/CardCateg';
import BrowseCateg from './components/BrowseCategories/BrowseCateg';
import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer'
import Browse from './components/Browse'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Browse />
      <CardCateg />
      <BrowseCateg />
      <Footer />
    </div>
  )
}

export default App;