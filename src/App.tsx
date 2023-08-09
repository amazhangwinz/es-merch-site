import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Confirmationpage from './pages/Confirmation';
import SingleItemPage from './pages/SingleItemPage';
import Checkoutpage from './pages/Checkoutpage';
import { styled } from 'styled-components';

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
  setCart: (newCart: CartItem[]) => { },
})

const GlobalStyle = styled.body`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ECECEC;
`

const Main = styled.div``

function App() {
  const [cart, setCart] = React.useState<CartItem[]>(defaultCart);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <GlobalStyle>
          <Main>
            <Navbar />
            <></>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/cart' element={<Cartpage />} />
              <Route path='/confirmation' element={<Confirmationpage />} />
              <Route path='/page' element={<SingleItemPage />} />
              <Route path='/Checkoutpage' element={<Checkoutpage />} />
            </Routes>
          </Main>
          <Footer />
        </GlobalStyle>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
