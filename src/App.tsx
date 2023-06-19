import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import ItemDescription from "./components/ItemComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cartpage />} />
        </Routes>
        <ItemDescription 
          productName={"Limited Edition Plush"}
          price={24.50}
          description={"If you love baking cookies, eating almond pound cake and cuddling with cute animals, you will adore this sanrio my melody plush."}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
