import { Box, Button } from '@mui/material';
import React from 'react'
import styled from "styled-components"
import OrderSummaryItem from "../components/OrderSummaryItem"
import { useNavigate } from "react-router-dom";

const InputLabel = styled.label`
  display: block;
  text-align: left;
  color: black;
  font-weight: bold;
  length: 200rem;
  width: 100%
`;

const CustomForm = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 40px solid #ECECEC;
  border-radius: 25px;
  background: #ECECEC;
`;

const CustomOrderSummary = styled.div`
  width: 30%;
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
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  font-family: Arial;
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  cursor: pointer;
`

const Boxes = styled.div`
  display: flex;
  justify-content: space-between;
`

const TotalSummary = styled.div`
  display: flex;
  justify-content: space-between;
`

const items = [{
  name: "Limited Edition Hoodie",
  colour: "Black",
  size: "Small",
  qty: 2,
  uprice: 100
}, {
  name: "Limited Edition Hoodie",
  colour: "Black",
  size: "Small",
  qty: 2,
  uprice: 100
},{
  name: "Limited Edition Hoodie",
  colour: "Black",
  size: "Small",
  qty: 2,
  uprice: 100
}]

const Checkoutpage = () => {
  let navigate = useNavigate(); 
  const routeChangeUpdateCart = () =>{ 
    let path = `/cart`; 
    navigate(path);
  }
  const routeChangeSubmit = () =>{ 
    let path = `/order-success`; 
    navigate(path);
  }
  return (
    <Box  ml={5} mr={7}>
      <h1>
        Checkout
      </h1>
      <Boxes>
        <CustomForm>
          <Container>
            <InputLabel htmlFor="fname">Full Name:</InputLabel><br></br>
            <CustomInput type="text" id = "fname" name="fname"></CustomInput><br></br>
          </Container>
          <Container>
            <InputLabel htmlFor="email">Email Address:</InputLabel><br></br>
            <CustomInput type="text" id = "email" name = "email"></CustomInput><br></br>
          </Container>
          <Container>
            <InputLabel htmlFor="phoneNumber">Phone Number:</InputLabel><br></br>
            <CustomInput type="text" id = "phoneNumber" name = "phoneNumber"></CustomInput><br></br>
          </Container>
          <Container>
            <InputLabel htmlFor="proofOfPurchase">Proof of Purchase:</InputLabel><br></br>
            {/* <AttachImage type="file" id = "proofOfPurchase" name = "proofOfPurchase"></AttachImage> */}
            <AttachImage type="file" id = "phoneNumber" name = "phoneNumber"></AttachImage><br></br>
          </Container>
          <CustomButton type = "button" onClick={routeChangeSubmit}>Submit</CustomButton>
        </CustomForm>
        <CustomOrderSummary>
          <div>
            <h3>YOUR ORDER SUMMARY</h3>
            <hr style={{
              color: "#212121",
              backgroundColor: "#212121",
              height: 2,
            }}/>
            </div>
          <div style={{overflow:'auto',height: '50%'}}>
            {
              items.map(x => <OrderSummaryItem colour={x.colour} size={x.size} item={x.name} qty={x.qty} uprice={x.uprice}/>)
            }
          </div>
          <TotalSummary>
            <p>Total</p>
            <p><b>${items.reduce((accumulator, currentValue) => accumulator + (currentValue.qty * currentValue.uprice), 0)}</b></p>
          </TotalSummary>
          <Button onClick={routeChangeUpdateCart}>Update Cart</Button>
        </CustomOrderSummary>
      </Boxes>
    </Box>
  )
}

export default Checkoutpage;