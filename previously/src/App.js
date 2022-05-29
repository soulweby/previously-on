import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Discover from './components/Discover';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Discover />
    <Routes>
      <Route path='./' element={<Discover />} />
    </Routes>
    </div>
  );
}

export default App;
