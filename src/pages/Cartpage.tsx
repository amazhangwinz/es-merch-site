import React from 'react'
import CartCard from '../components/CartCard';
import Quantity from '../components/Quantity';

import Winnie from '../assets/WinnieZhang.png'
import Lawrence from '../assets/LawrenceChau.png'
import Neel from '../assets/NeelDutta.png'

import QuantityPic from '../assets/Quantity.png'
import Bin from '../assets/Bin.png'
import { borderBottomColor } from '@mui/system';

const Cartpage = () => {
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
        <CartCard
          image={Winnie}
          title="Winnie Zhang"
          description="Limited Edition Hoodie"
          colour="Black"
          size="Small"
          unitPrice={100}
          quantity={1}
          removeItem={Bin} 
          // total={0}        
        />
        <CartCard
          image={Lawrence} 
          title="Lawrence Chau"
          description="Hoodie"
          colour="Green"
          size="Small"
          unitPrice={50}
          quantity={1} 
          removeItem={Bin} 
          // total={100} 
        />
        <CartCard
          image={Neel} 
          title="Neel Dutta"
          description="Bucket Hat"
          colour="Neon blue"
          size="N/A"
          unitPrice={20}
          quantity={1} 
          removeItem={Bin} 
          // total={40} 
        />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '75rem', paddingTop: '3rem', paddingBottom: '3rem', marginBottom: '2.15rem', borderBottom: '1px solid #d9d9d9', borderTop: '1px solid #d9d9d9', fontSize: '1.5rem' }}>
        <div style={{ width: '70%', textAlign: 'right'}}>Subtotal</div>
        <div style={{ width: '10%'}}></div>
        <div style={{ width: '20%', textAlign: 'center', fontWeight: 'bold' }}>(Enter Value)</div>
      </div>
      <div style={{ marginBottom: '10rem', width: '75rem', display: 'flex', justifyContent: 'right'}}>
        <div style={{ width: '13rem', background: '#D9D9D9', padding: '1rem', borderRadius: '3.13rem', marginTop: '1rem', fontSize: '1.5rem', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>Go to checkout</div>
      </div>
    </div>
  )
}

export default Cartpage;