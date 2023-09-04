import { Box, Button } from '@mui/material';
import React from 'react'
import styled from "styled-components"
import OrderSummaryItem from "../components/OrderSummaryItem"
import { useNavigate } from "react-router-dom";
import { cartContext } from '../App';
import axios from 'axios';

const InputLabel = styled.label`
  display: block;
  text-align: left;
  color: black;
  font-weight: bold;
  length: 200rem;
  width: 100%
`;

const CustomForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-cart: flex-start;
  border: 20px solid #ECECEC;
  border-radius: 25px;
  background: #ECECEC;
`;

const CustomOrderSummary = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  border: 20px solid #ECECEC;
  background: #ECECEC;
  border-radius: 25px;
`;

const CustomInput = styled.input`
  display: block;
  background: white;
  width: 100%;
  border: none;
  height: 1.8rem;
`;

const Container = styled.div`
  width: 100%;
  line-height: 80%;
  margin: 10px;
`;

const AttachImage = styled.input`
  display: block;
  //background: white;
  width: 200px;
  border: none;
  height: 15%;
  margin: 0 auto;
`

const CustomButton = styled.button`
  margin: 0 auto;
  background-color: #051839;
  color: white;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 10px;
  // box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  font-family: Arial;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  cursor: pointer;
`

// const Boxes = styled.div`
//   display: flex;
//   justify-content: space-between;
// `

const TotalSummary = styled.div`
  display: flex;
  justify-content: space-between;
`

const Checkoutpage = () => {
  const { cart, setCart } = React.useContext(cartContext);

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [zid, setZid] = React.useState('')
  const [payment, setPayment] = React.useState<File>()
  const [paymentUploaded, setPaymentUploaded] = React.useState(false)

  let navigate = useNavigate();
  const routeChangeUpdateCart = () => {
    let path = `/cart`;
    navigate(path);
  }
  const routeChangeSubmit = (e: React.SyntheticEvent) => {
    handleSubmit(e)
    setCart([])
    localStorage.clear()
    let path = `/order-success`;
    navigate(path);
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPayment(e.target.files[0])
      setPaymentUploaded(true)
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
    let collected = 'false'
    let the_original_s_num = 0
    let the_original_m_num = 0
    let the_original_l_num = 0
    let sketchbook_s_num = 0
    let sketchbook_m_num = 0
    let sketchbook_l_num = 0
    let pastel_nights_s_num = 0
    let pastel_nights_m_num = 0
    let pastel_nights_l_num = 0

    for (const item of cart) {
      if (item.name === "The Original" && item.size === "Small") {
        the_original_s_num += 1
      }
      else if (item.name === "The Original" && item.size === "Medium") {
        the_original_m_num += 1
      }
      else if (item.name === "The Original" && item.size === "Large") {
        the_original_l_num += 1
      }
      else if (item.name === "Sketchbook" && item.size === "Small") {
        sketchbook_s_num += 1
      }
      else if (item.name === "Sketchbook" && item.size === "Medium") {
        sketchbook_m_num += 1
      }
      else if (item.name === "Sketchbook" && item.size === "Large") {
        sketchbook_l_num += 1
      }
      else if (item.name === "Pastel Nights" && item.size === "Small") {
        pastel_nights_s_num += 1
      }
      else if (item.name === "Pastel Nights" && item.size === "Medium") {
        pastel_nights_m_num += 1
      }
      else if (item.name === "Pastel Nights" && item.size === "Large") {
        pastel_nights_l_num += 1
      }
    }

    let the_original_s = the_original_s_num.toString()
    let the_original_m = the_original_m_num.toString()
    let the_original_l = the_original_l_num.toString()
    let sketchbook_s = sketchbook_s_num.toString()
    let sketchbook_m = sketchbook_m_num.toString()
    let sketchbook_l = sketchbook_l_num.toString()
    let pastel_nights_s = pastel_nights_s_num.toString()
    let pastel_nights_m = pastel_nights_m_num.toString()
    let pastel_nights_l = pastel_nights_l_num.toString()

		const objt = { name,
      email, 
      zid, 
      the_original_s, 
      the_original_m,
      the_original_l,
      sketchbook_s,
      sketchbook_m,
      sketchbook_l,
      pastel_nights_s,
      pastel_nights_m,
      pastel_nights_l,
      collected };

		axios
			.post(
				'https://sheet.best/api/sheets/d6dafd35-ad99-4082-9da1-f122f2c14a69',
				objt
			)
			.then((response) => {
				console.log(response);
			});
	};

  
  return (
    <Box sx={{ ml: { xs: 2, md: 5 }, mr: 7 }}>
      <Box sx={{ textAlign: { xs: 'center' } }}>
        <h1>
          Checkout
        </h1>
      </Box>
      <Box sx={{ display: "flex", justifyContent: { xs: 'center', md: 'space-between' }, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ width: { md: '50%', xs: '90%' }, height: '100%' }}>
          <CustomForm>
            <Container>
              <InputLabel htmlFor="fname">Full Name:</InputLabel><br></br>
              <CustomInput type="text" id="fname" name="fname" value={name} onChange={e => setName(e.target.value)}></CustomInput><br></br>
            </Container>
            <Container>
              <InputLabel htmlFor="email">Email Address:</InputLabel><br></br>
              <CustomInput type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)}></CustomInput><br></br>
            </Container>
            <Container>
              <InputLabel htmlFor="phoneNumber">ZID:</InputLabel><br></br>
              <CustomInput type="text" id="phoneNumber" name="phoneNumber" value={zid} onChange={e => setZid(e.target.value)}></CustomInput><br></br>
            </Container>
            <Container>
              <InputLabel htmlFor="proofOfPurchase">Proof of Purchase:</InputLabel><br></br>
              {/* <AttachImage type="file" id = "proofOfPurchase" name = "proofOfPurchase"></AttachImage> */}
              <AttachImage type="file" id="phoneNumber" name="phoneNumber" onChange={e => handleFileUpload(e)}></AttachImage><br></br>
            </Container>
            <CustomButton type="button" onClick={routeChangeSubmit}>Submit</CustomButton>
          </CustomForm>
        </Box>
        <Box sx={{ width: { md: '30%', xs: '100%' } }}>
          <CustomOrderSummary>
            <div>
              <h3>YOUR ORDER SUMMARY</h3>
              <hr style={{
                color: "#212121",
                backgroundColor: "#212121",
                height: 2,
              }} />
            </div>
            <div style={{ overflow: 'auto', height: '50%' }}>
              {/** MAP OVER CART INSTEAD!!!!! */}
              {
                // cart.map(x => <OrderSummaryItem colour={x.colour} size={x.size} item={x.name} qty={x.quantity} uprice={x.price} />)
                cart.map(x => <OrderSummaryItem size={x.size} item={x.name} qty={x.quantity} uprice={x.price} />)
              }
            </div>
            <TotalSummary>
              <p>Total</p>
              <p><b>${cart.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)}</b></p>
            </TotalSummary>
            <Button onClick={routeChangeUpdateCart}>Update Cart</Button>
          </CustomOrderSummary>
        </Box>
      </Box>
    </Box>
  )
}

export default Checkoutpage;