import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Confirmationpage from './pages/Confirmation';
import SingleItemPage from './pages/SingleItemPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/confirmation' element={<Confirmationpage />} />
          <Route path='/page' element={<SingleItemPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
