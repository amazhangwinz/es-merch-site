import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Productpage from './pages/Product';
import Footer from './components/Footer';
import Waves from './assets/Waves.svg';

import { styled } from 'styled-components';


const StyledSeparateImg = styled.img`
  height: 10vh;
  width: 100vw;
  margin-top: 600;
  object-fit: fill;
  padding-top: 30;
  margin-bottom: 0;
  margin-right: 0rem;
  margin-left: 0rem;
`;


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cartpage />} />
          <Route path='/product' element={<Productpage />} />
        </Routes>
        <div>
          <StyledSeparateImg src={Waves} />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
