import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import Offers from './pages/Offers';

function App() {
  return (
    <div className='root'>
      <Layout />
      <main>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/gallery' element={ <Gallery /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/contact' element={ <Contact /> } />
          <Route path='/offers' element={ <Offers /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
