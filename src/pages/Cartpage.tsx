import React from 'react'
import CartCard from '../components/CartCard';
import Quantity from '../components/Quantity';

import Winnie from '../assets/WinnieZhang.png'
import Lawrence from '../assets/LawrenceChau.png'
import Neel from '../assets/NeelDutta.png'

import QuantityPic from '../assets/Quantity.png'
import Bin from '../assets/Bin.png'

const Cartpage = () => {
  return (
    <div>
      <h1>
        Your Cart
      </h1>
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