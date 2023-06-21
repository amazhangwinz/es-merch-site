import React from 'react'
import CartCard from '../components/CartCard';
import Winnie from '../assets/WinnieZhang.png'
import Quantity from '../assets/Quantity.png'
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
          unitPrice={75}
          quantity={Quantity} 
          removeItem={Bin} 
          total={200} 
          />
			</div>
    </div>
  )
}

export default Cartpage;
