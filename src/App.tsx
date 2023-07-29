import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import ExampleUseContext from './components/ExampleUseContext';

/* 
- quantity of the items
- items in cart
*/

export interface CartItem {
  price: number,
  name: string,
  quantity: number,
  color: string,
  size: string
}

const defaultCart: CartItem[] = [
  {
    price: 100,
    name: "jacket",
    quantity: 10,
    size: 'M',
    color: 'blue',
  },
  {
    price: 100,
    name: "hat",
    quantity: 2,
    size: 'M',
    color: 'blue',
  },
  {
    price: 20,
    name: "scarf",
    quantity: 10,
    size: 'M',
    color: 'blue',
  },
];

export const cartContext = React.createContext({
  cart: defaultCart,
  setCart: (newCart: CartItem[]) => {}, 
})

function App() {
  const [cart, setCart] = React.useState<CartItem[]>(defaultCart);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        {/*<ExampleUseContext></ExampleUseContext>*/}
        <Navbar />
        <></>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cartpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
