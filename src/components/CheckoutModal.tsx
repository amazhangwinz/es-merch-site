import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Container,
    Modal,
    Button,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import styled from "styled-components";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    display: "flex",
    flexDirection: "column",

};

const uppermodal = {
    bgcolor: 'white',
    borderRadius: '30px 30px 0px 0px',
    display: 'flex',
    // justifyContent: "space-around",
    p: '1.5rem',
    pt: '3rem',
    pb: '3rem',
    textAlign: 'left',
}
const lowermodal = {
    bgcolor: 'blue',
    borderRadius: '0px 0px 30px 30px',
    background: '#84A8C9',
    p: '1.2rem',
    display: 'flex',
    justifyContent: "space-evenly",
}

const StyledModalText = styled.text`
color: #1C3A59;
font-family: Montserrat;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const ButtonStyle = {
    borderRadius: '50px',
    background: '#D9D9D9',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '12px',
    fontWeight: '600',
    contrastText: 'black',
    flex: '1 1 0',
    m: '.5rem',
    pt: '1rem',
    pb: '1rem'
}

const addCartButtonStyle = {
    borderRadius: '13px',
    background: '#FB9E9E',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '110%',
    fontWeight: '500',
    contrastText: 'black',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    height: '70%',
    alignSelf: 'center'
}

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#D9D9D9',
            contrastText: "#1C3A59",
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});
// const navigate = useNavigate();

// const cartLink = () => {
//     navigate("/cart")
// }

type CheckoutModalProps = {
    handleAddToCart: () => void;
}

const CheckoutModal = (props: CheckoutModalProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{ height: "100%", justifyContent: "space-around", alignContent: "baseline", display: 'flex', margin: '1rem' }}>
            <ThemeProvider theme={theme}>
                <Button variant="contained" sx={addCartButtonStyle} onClick={() => {props.handleAddToCart();
                    handleOpen()}}>Add to Cart</Button>
            </ThemeProvider>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {/* <uppermodal></uppermodal> */}

                    {/* <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                    <Box sx={uppermodal}><StyledModalText>Added to Cart !</StyledModalText></Box>
                    <Box sx={lowermodal}>
                        <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={ButtonStyle} onClick={handleClose}>Keep Shopping</Button>
                            <Button variant="contained" sx={ButtonStyle} href="/cart">Go to Cart</Button>
                        </ThemeProvider>
                    </Box>

                </Box>
            </Modal>
        </div >
    );
}
export default CheckoutModal;