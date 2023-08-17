import React from 'react'
import CartCard from '../components/CartCard';
import Quantity from '../components/Quantity';
import {data} from '../Data.jsx';
import Winnie from '../assets/WinnieZhang.png'
import Lawrence from '../assets/LawrenceChau.png'
import Neel from '../assets/NeelDutta.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QuantityPic from '../assets/Quantity.png'
import { borderBottomColor } from '@mui/system';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Cartpage = () => {
  const navigate = useNavigate();
	const checkoutPage = () => {
		navigate({
			pathname: '/checkout',
		});
	};

  return (
    <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{fontSize: '1.875rem', fontStyle: 'normal', fontWeight: '700' }}>
        Your Cart
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '75rem', padding: '1rem', marginBottom: '2rem', borderBottom: '1px solid #d9d9d9', fontSize: '1.5rem' }}>
        {/* do not add border line, only background for debugging */}
        <div style={{ width: '50%', textAlign: 'left'}}>Product</div>
        <div style={{ width: '20%', textAlign: 'center'}}>Quantity</div>
        <div style={{ width: '10%'}}></div>
        <div style={{ width: '20%', textAlign: 'center' }}>Total</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data.map((item, idx) => {
					return (
					<CartCard title={item.name} image={item.default} index={idx} unitPrice={item.price}
					/>)
				})}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '75rem', paddingTop: '3rem', paddingBottom: '3rem', marginBottom: '2.15rem', borderBottom: '1px solid #d9d9d9', borderTop: '1px solid #d9d9d9', fontSize: '1.5rem' }}>
        <div style={{ width: '70%', textAlign: 'right'}}>Subtotal</div>
        <div style={{ width: '10%'}}></div>
        {/*PUT USE CONTEXT BELOW*/}
        <div style={{ width: '20%', textAlign: 'center', fontWeight: 'bold' }}>(Enter Value)</div>
      </div>
      {/* <div style={{ marginBottom: '10rem', width: '75rem', display: 'flex', justifyContent: 'right'}}> */}
      <Button onClick={checkoutPage} style={{color: 'black', fontSize: '1.2rem', background: '#D9D9D9'}} variant="contained" endIcon={<ArrowForwardIcon />}>Go to Checkout</Button>
        {/* <div style={{ width: '13rem', background: '#D9D9D9', padding: '1rem', borderRadius: '3.13rem', marginTop: '1rem', fontSize: '1.5rem', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>Go to checkout</div> */}
      {/* </div> */}
    </div>
  )
}

export default Cartpage;