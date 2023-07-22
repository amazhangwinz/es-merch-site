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
    <div style={{ marginTop: '5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{fontSize: '1.875rem', fontStyle: 'normal', fontWeight: '700' }}>
        Your Cart
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '90vw', padding: '1vw', marginBottom: '2vw', borderBottom: '0.1875rem solid #d9d9d9', fontSize: '1.5625rem' }}>
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
    </div>
  )
}

export default Cartpage;