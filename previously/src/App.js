import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Discover from './components/Discover';
import Banner from './components/Banner';
// import Favorite from './components/Favorite';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Banner/>
    <Routes>
      <Route path='/' element={<Discover/>} />
      {/* <Route path='/favorite' element={<Favorite/>} /> */}
    </Routes>
    </div>
  );
}

export default App;
