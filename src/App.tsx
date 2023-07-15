import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Checkoutpage from './pages/Checkoutpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/Checkoutpage' element={<Checkoutpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
