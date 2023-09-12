import { Box, Button, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
// import ExpandIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import styled from "styled-components"
import OrderSummaryItem from "../components/OrderSummaryItem";
import ImageInput from '../components/ImageInput';
import { useNavigate } from "react-router-dom";
import { cartContext } from '../App';
import axios from 'axios';
import CheckoutErrorModal from '../components/CheckoutErrorModal';
import storage from "../firebaseConfig"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const InputLabel = styled.label`
  display: block;
  text-align: left;
  color: black;
  font-weight: bold;
  width: 100%;
`;

const CustomForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const Container = styled.div`
  width: 100%;
  line-height: 80%;
  margin: 10px;
`;

// const AttachImage = styled.input`
//   display: block;
//   //background: white;
//   width: 200px;
//   border: none;
//   height: 15%;
//   margin: 0 auto;
// `

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
const theme = createTheme({
  palette: {
      primary: {
          // Purple and green play nicely together.
          main: '#D9D9D9',
          contrastText: "black",
      },
      secondary: {
          // This is green.A700 as hex.
          main: '#11cb5f',
      },
  },
});

const Checkoutpage = () => {
  const { cart, setCart } = React.useContext(cartContext);

  const [name, setName] = React.useState('')
  const [nameTouched, setNameTouched] = React.useState(false)
  const [email, setEmail] = React.useState('')
  const [emailTouched, setEmailTouched] = React.useState(false)
  const [zid, setZid] = React.useState('')
  const [payment, setPayment] = React.useState<File>()
  const [paymentUploaded, setPaymentUploaded] = React.useState(false)
  const [paymentTouched, setPaymentTouched] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)

  let navigate = useNavigate();
  const routeChangeUpdateCart = () => {
    let path = `/cart`;
    navigate(path);
  }
  const routeChangeSubmit = (e: React.SyntheticEvent) => {
    if (name === '' || email === '' || !paymentUploaded) {
      setShowModal(true)
      return
    }
    handleSubmit(e)
    setCart([])
    localStorage.clear()
    let path = `/order-success`;
    navigate(path);
  }

  // const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files) {
  //     setPayment(e.target.files[0])
  //     setPaymentUploaded(true)
  //   }
  // }

  const handleNameBlur = () => {
    setNameTouched(true)
  }

  const handleEmailBlur = () => {
    setEmailTouched(true)
  }

  const handleFileBlur = () => {
    setPaymentTouched(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleFirebaseUpload = async () => {
    if (!payment) {
      alert("Please upload an image first!");
    } else {
      const storageRef = await ref(storage, `/files/${name}`);

      // upload the file
      const snapshot = await uploadBytes(storageRef, payment);
      const downloadURL = await getDownloadURL(snapshot.ref)
      return downloadURL
    };
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    // console.log(cart)
    e.preventDefault();
    let collected = 'false'
    let pastel_nights = ''
    let morning_green = ''
    let midnight_blue = ''
    let silvery_moon = ''

    for (const item of cart) {
      // console.log(item.name)
      if (item.name === 'Pastel Nights') {
        if (pastel_nights) {
          pastel_nights += ' , '
        }
        pastel_nights += `${item.size} ${item.quantity}`
      } else if (item.name === 'The Original') {
        if (morning_green) {
          morning_green += ' , '
        }
        morning_green += `${item.size} ${item.quantity}`
        // console.log(morning_green)
      } else if (item.name === 'Midnight Blue') {
        if (midnight_blue) {
          midnight_blue += ' , '
        }
        midnight_blue += `${item.size} ${item.quantity}`
      } else if (item.name === 'Silvery Moon') {
        if (silvery_moon) {
          silvery_moon += ' , '
        }
        silvery_moon += `${item.size} ${item.quantity}`
      }
    }
    /*let the_original_s_num = 0
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
        the_original_s_num += item.quantity
      }
      else if (item.name === "The Original" && item.size === "Medium") {
        the_original_m_num += item.quantity
      }
      else if (item.name === "The Original" && item.size === "Large") {
        the_original_l_num += item.quantity
      }
      else if (item.name === "Sketchbooked" && item.size === "Small") {
        sketchbook_s_num += item.quantity
      }
      else if (item.name === "Sketchbooked" && item.size === "Medium") {
        sketchbook_m_num += item.quantity
      }
      else if (item.name === "Sketchbooked" && item.size === "Large") {
        sketchbook_l_num += item.quantity
      }
      else if (item.name === "Pastel Nights" && item.size === "Small") {
        pastel_nights_s_num += item.quantity
      }
      else if (item.name === "Pastel Nights" && item.size === "Medium") {
        pastel_nights_m_num += item.quantity
      }
      else if (item.name === "Pastel Nights" && item.size === "Large") {
        pastel_nights_l_num += item.quantity
      }
    }
    */
    const proof_of_purchase = await handleFirebaseUpload()
    /*
    let the_original_s = the_original_s_num.toString()
    let the_original_m = the_original_m_num.toString()
    let the_original_l = the_original_l_num.toString()
    let sketchbook_s = sketchbook_s_num.toString()
    let sketchbook_m = sketchbook_m_num.toString()
    let sketchbook_l = sketchbook_l_num.toString()
    let pastel_nights_s = pastel_nights_s_num.toString()
    let pastel_nights_m = pastel_nights_m_num.toString()
    let pastel_nights_l = pastel_nights_l_num.toString()
    */
    const objt = {
      name,
      email,
      zid,
      pastel_nights,
      morning_green,
      midnight_blue,
      silvery_moon,
      payment,
      paymentUploaded,
      collected,
      proof_of_purchase
    };

    axios
      .post(
        'https://sheet.best/api/sheets/d6dafd35-ad99-4082-9da1-f122f2c14a69',
        objt
      )
      .then((response: any) => {
        console.log(response);
      });
  };


  return (
    <Box sx={{ mt: 5, ml: { xs: 2, md: 5 }, mr: 7 }}>
      <Box sx={{ textAlign: { xs: 'center' } }}>
        <h1>
          Checkout
        </h1>
      </Box>
      <Box sx={{ display: "flex", justifyContent: { xs: 'center', md: 'space-between' }, flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ width: { md: '50%', xs: '90%' }, height: '100%' }}>
          <CustomForm>
            <Container>
              <InputLabel htmlFor="fname">Full Name</InputLabel><br></br>
              <TextField error={name === '' && nameTouched} helperText={name === '' && nameTouched ? 'Name Required' : ''} sx={{ width: '100%' }} type="text" id="fname" name="fname" value={name} onChange={e => setName(e.target.value)} onBlur={handleNameBlur}></TextField><br></br>
            </Container>
            <Container>
              <InputLabel htmlFor="email">Email Address</InputLabel><br></br>
              <TextField error={email === '' && emailTouched} helperText={email === '' && emailTouched ? 'Email Required' : ''} sx={{ width: '100%' }} type="text" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} onBlur={handleEmailBlur}></TextField><br></br>
            </Container>
            <Container>
              <InputLabel htmlFor="phoneNumber">zID</InputLabel><br></br>
              <TextField sx={{ width: '100%' }} type="text" id="phoneNumber" name="phoneNumber" value={zid} onChange={e => setZid(e.target.value)}></TextField><br></br>
            </Container>
            <Container>
              <InputLabel htmlFor="proofOfPurchase">Proof of Purchase</InputLabel><br></br>
              {!paymentUploaded && paymentTouched ? <div><span style={{ fontSize: '12px', color: '#d32f2f' }}>Proof of Purchase Required</span></div> : null}
              {!paymentUploaded && paymentTouched ? <br></br> : null}
              {/* <AttachImage type="file" id = "proofOfPurchase" name = "proofOfPurchase"></AttachImage> */}
              {/* <AttachImage type="file" id="phoneNumber" name="phoneNumber" onBlur={handleFileBlur} onChange={e => handleFileUpload(e)}></AttachImage><br></br> */}
              <Box sx={{ mb: '1rem' }}>
                {/* <Accordion sx={{ px: '1rem' }}>
                  <AccordionSummary
                    expandIcon={<ExpandIcon />}
                    aria-controls="panel1a-content"
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>Paying for your Merch</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ borderTop: '2px solid #666363' }}> */}
                    <Typography sx={{ fontSize: '14px' }}>
                      Transfer to the following account to pay for your merchandise:
                    </Typography>
                    <Typography sx={{ fontSize: '14px' }}><strong>Account Name:</strong> UNSW Engineering Society</Typography>
                    <Typography sx={{ fontSize: '14px' }}><strong>BSB:</strong> 062-303</Typography>
                    <Typography sx={{ fontSize: '14px' }}><strong> Account Number:</strong> 1076 1538</Typography>
                    <br />
                    <Typography sx={{ fontSize: '14px' }}><strong>IMPORTANT</strong></Typography>
                    <Typography sx={{ fontSize: '14px' }}>To pay for your merch, in your bank transfer, you must fill the 'Description on your statement' with your zID and 'MERCH23'. For example: z1234567 MERCH23</Typography>
                    <br />
                    <Typography sx={{ fontSize: '14px' }}>Note: This purchase is only a pre-order. Keep an eye on your emails to hear when merch is ready for pickup.</Typography>
                  {/* </AccordionDetails>
                </Accordion> */}
              </Box>
              <ImageInput onBlur={handleFileBlur} selectedFile={payment} setSelectedFile={setPayment} uploaded={paymentUploaded} setUploaded={setPaymentUploaded} />
            </Container>
            <CustomButton type="button" onClick={routeChangeSubmit}>Submit</CustomButton>
            <CheckoutErrorModal open={showModal} onClose={handleClose} />
          </CustomForm>
        </Box >
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
              {
                // cart.map(x => <OrderSummaryItem colour={x.colour} size={x.size} item={x.name} qty={x.quantity} uprice={x.price} />)
                cart.map(x => <OrderSummaryItem size={x.size} item={x.name} qty={x.quantity} uprice={x.price} />)
              }
            </div>
            <TotalSummary>
              <p>Total</p>
              <p><b>${Math.round(((cart.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)) + Number.EPSILON) * 100) / 100}</b></p>
            </TotalSummary>
            <ThemeProvider theme={theme}>
              <Button onClick={routeChangeUpdateCart} variant="contained">Update Cart</Button>
            </ThemeProvider>
          </CustomOrderSummary>
        </Box>
      </Box >
    </Box >
  )
}

export default Checkoutpage;