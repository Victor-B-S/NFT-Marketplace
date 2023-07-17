import './App.css';
import CardCateg from './components/BrowseCategory/CardCategory/CardCateg';
import BrowseCateg from './components/BrowseCategory/BrowseCateg';
import HowItWorks from './components/HowItWorks/HowItWorks';
import TrendingCollection from './components/TrendingCollection/TrendingCollection';
import CardTrendingCollection from './components/TrendingCollection/CardTrendingCollection/CardTrendingCollection';


function App() {
  return (
    <div className="app">
      {/*<CardCateg /> */}
      {/* <BrowseCateg /> */}
      {/* <CardHiw /> */}
      {/* <HowItWorks />*/}
      <CardTrendingCollection />
       <TrendingCollection />
    </div>
  )
}

export default App;