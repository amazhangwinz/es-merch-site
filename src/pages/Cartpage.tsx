import React from 'react'
import CartCard from '../components/CartCard';
// import { data } from '../Data.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { cartContext } from '../App';
import CartErrorModal from '../components/CartErrorModal';


const Cartpage = () => {
  // const navigate = useNavigate();
  const checkoutPage = () => {
    // if (cart.length < 1) {
      setShowModal(true)
    // } else {
      // navigate({
      //   pathname: '/checkout',
      // });

    // }
  };

  // popup for going to checkout with an empty cart
  const [showModal, setShowModal] = React.useState(false)

  const handleClose = () => {
    setShowModal(false)
  }

  const { cart, setCart } = React.useContext(cartContext);
  const subTotal = Math.round((cart.reduce((total, item) => total + item.total, 0) + Number.EPSILON) * 100) / 100;

  const handleSizeChange = (index: number, newSize: string) => {
    const updatedCart = [...cart];
    updatedCart[index].size = newSize;
    setCart(updatedCart); // Update the state with the new size
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;
    // need to change the total as well
    updatedCart[index].total = Math.round((updatedCart[index].price * newQuantity + Number.EPSILON) * 100) / 100;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <Box sx={{ minWidth: { md: "none", xs: "370px" }, marginTop: { md: '4rem', xs: "none" }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ fontSize: '1.875rem', fontStyle: 'normal', fontWeight: '700' }}>
        Your Cart
      </p>
      <Box sx={{ display: { md: 'flex', xs: "none" }, flexWrap: 'wrap', width: '75rem', padding: '1rem', marginBottom: '2rem', borderBottom: '1px solid #d9d9d9', fontSize: '1.5rem' }}>
        {/* do not add border line, only background for debugging */}
        <div style={{ width: '50%', textAlign: 'left' }}>Product</div>
        <div style={{ width: '20%', textAlign: 'center' }}>Quantity</div>
        <div style={{ width: '10%' }}></div>
        <div style={{ width: '20%', textAlign: 'center' }}>Total</div>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', maxWidth: { md: "none", xs: "370px" } }}>
        {cart.map((item, idx) => {
          return (
            <CartCard
              title={item.name}
              image={item.image}
              index={idx}
              unitPrice={item.price}
              qty={item.quantity}
              onQuantityChange={(newQuantity) => handleQuantityChange(idx, newQuantity)}
              size={item.size}
              onSizeChange={(newSize) => handleSizeChange(idx, newSize)} // Pass the callback
              total={item.total}
            />);
        })}
      </Box>
      <Box sx={{ maxWidth: { md: "none", xs: "370px" }, display: 'flex', flexWrap: 'wrap', width: '75rem', paddingTop: { md: '3rem', xs: ".5rem" }, paddingBottom: { md: '3rem', xs: ".5rem" }, marginBottom: { md: '2.15rem', xs: "1rem" }, borderBottom: '1px solid #d9d9d9', borderTop: '1px solid #d9d9d9', fontSize: '1.5rem' }}>
        <div style={{ width: '70%', textAlign: 'right' }}>Subtotal</div>
        <div style={{ width: '10%' }}></div>
        {/*PUT USE CONTEXT BELOW , USE REDUCE FUNCTION TO SUM IT*/}
        <div style={{ width: '20%', textAlign: 'center', fontWeight: 'bold', marginLeft: '-1rem' }}>${subTotal}</div>
      </Box>
      {/* <div style={{ marginBottom: '10rem', width: '75rem', display: 'flex', justifyContent: 'right'}}> */}
      <Button onClick={checkoutPage} sx={{ display: { md: "flex", xs: "none" }, color: 'black', fontSize: '1.2rem', background: '#D9D9D9' }} variant="contained" endIcon={<ArrowForwardIcon />}> Go to Checkout </Button>
      <Button onClick={checkoutPage} size='small' sx={{ display: { md: "none", xs: 'flex' }, color: 'black', fontSize: '1.2rem', background: '#D9D9D9' }} variant="contained" > Checkout </Button>
      <CartErrorModal open={showModal} onClose={handleClose} />
      {/* <div style={{ width: '13rem', background: '#D9D9D9', padding: '1rem', borderRadius: '3.13rem', marginTop: '1rem', fontSize: '1.5rem', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'}}>Go to checkout</div> */}
      {/* </div> */}
    </Box>
  )
}

export default Cartpage;