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
  colour: string,
  size: string
}

const defaultCart: CartItem[] = [
];

export const cartContext = React.createContext({
  cart: defaultCart,
  setCart: (newCart: CartItem[]) => { },
})

const GlobalStyle = styled.body`
  min-height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  background-color: #ECECEC;
`

const Main = styled.div``

function App() {
  const [cart, setCart] = React.useState<CartItem[]>(defaultCart);
  React.useEffect(() => {
    if (localStorage.getItem("cart") != null)
      setCart(JSON.parse(localStorage.getItem("cart") || ""))
  }, []);
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
              <Route path='/order-success' element={<Confirmationpage />} />
              <Route path='/item' element={<SingleItemPage />} />
              <Route path='/checkout' element={<Checkoutpage />} />
            </Routes>
          </Main>
          <Footer />
        </GlobalStyle>
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
