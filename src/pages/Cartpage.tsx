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
    <div style={{ marginTop: '4vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{fontSize: '2.5vw', fontStyle: 'normal', fontWeight: '700' }}>
        Your Cart
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '85vw', padding: '1vw', marginBottom: '2.15vw', borderBottom: '1px solid #d9d9d9', fontSize: '2vw' }}>
        <div style={{ width: '50%', textAlign: 'left'}}>Product</div>
        <div style={{ width: '20%', textAlign: 'center'}}>Quantity</div>
        <div style={{ width: '10%'}}></div>
        <div style={{ width: '20%', textAlign: 'center' }}>Total</div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
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
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '85vw', paddingTop: '3vw', paddingBottom: '3vw', marginBottom: '2.15vw', borderBottom: '1px solid #d9d9d9', borderTop: '1px solid #d9d9d9', fontSize: '2vw' }}>
        <div style={{ width: '70%', textAlign: 'right'}}>Subtotal</div>
        <div style={{ width: '10%'}}></div>
        <div style={{ width: '20%', textAlign: 'center', fontWeight: 'bold' }}>(Enter Value)</div>
      </div>
      <div style={{ marginBottom: '10vw', width: '85vw', display: 'flex', justifyContent: 'right'}}>
        <div style={{ width: '20vw', background: '#D9D9D9', padding: '2vw 2vw', borderRadius: '4vw', marginTop: '1vw', fontSize: '2vw', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>Go to checkout</div>
      </div>
    </div>
  )
}

export default Cartpage;