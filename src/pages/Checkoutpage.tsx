import React from 'react'
import styled from "styled-components"

const InputLabel = styled.label`
  display: block;
  text-align: left;
  color: black;
  font-weight: bold;
  length: 200rem;
  width: 100%
`;

const CustomForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  border: 40px solid #ECECEC;
  background: #ECECEC;
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
`

const Checkoutpage = () => {
  // let [girichand, setGirichand] = React.useState("sexy");
  return (
    <div>
      <h1>
        CHECKOUT PAGE
      </h1>
      <div>
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
          <CustomButton type = "button">Submit</CustomButton>
        </CustomForm>
      </div>
    </div>
  )
}

export default Checkoutpage;