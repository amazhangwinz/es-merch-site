import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import {
    Box,
    Modal,
    Button,
    Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { md: 400, xs: 350 },
    display: "flex",
    flexDirection: "column",

};

const uppermodal = {
    bgcolor: '#FFF',
    borderRadius: '2.0625rem 2.0625rem 0px 0px',
    display: 'flex',
    // justifyContent: "space-around",
    p: '1.5rem',
    pt: '1.5rem',
    pb: '.5rem',
    textAlign: 'left',
    flexDirection: "column",
}
const lowermodal = {
    bgcolor: 'blue',
    borderRadius: '0px 0px 2.0625rem 2.0625rem',
    background: '#1C3A59',
    p: { md: '1.2rem', xs: '.7rem' },
    display: 'flex',
    justifyContent: { md: "space-around", xs: "center" },
}

const StyledModalText =
{
    color: "#1C3A59",
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
}
const ButtonStyle = {
    // width: "100%",
    borderRadius: '50px',
    background: '#D9D9D9',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: { md: '12px', xs: "70%" },
    fontWeight: '600',
    contrastText: 'black',
    // flex: '1',
    m: '.5rem',
    pt: { md: '.5rem', xs: ".8rem" },
    pb: { md: '.5rem', xs: ".8rem" },
}

const addCartButtonStyle = {
    borderRadius: '13px',
    background: '#FB9E9E',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: { md: '110%', xs: "90%" },
    fontWeight: '500',
    contrastText: 'black',
    paddingLeft: { md: '2rem', xs: "1rem" },
    paddingRight: { md: '2rem', xs: "1rem" },
    height: { md: '70%', xs: "130%" },
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
    title: string;
    size: string;
    image: string;
    unitPrice: number;
    qty: number;
}

const CheckoutModal = (props: CheckoutModalProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const goToCart = () => {
        navigate("/cart")
    }
    const productPage = (prodName: string) => {
        navigate({
            pathname: '/item',
            search: `?${createSearchParams({ title: prodName })}`,
        });
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <Box sx={{ height: "100%", justifyContent: "space-around", alignContent: "center", display: 'flex', margin: '1rem' }}>
            <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    sx={addCartButtonStyle}
                    onClick={() => {
                        props.handleAddToCart();
                        handleOpen()
                    }}
                >
                    <Box component="span" sx={{ display: { xs: 'none', md: 'inline' }, }}>Add to Cart</Box>
                    <Box component="span" sx={{ display: { xs: 'inline', md: 'none' }, width: '3.5rem' }}>Add</Box>
                </Button>
            </ThemeProvider>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={uppermodal}>
                        <Typography sx={StyledModalText}>
                            Added to Cart !
                        </Typography>
                        <Box sx={{ display: 'flex', borderTop: "1px solid #d9d9d9", mt: ".5rem", maxWidth: "370px" }}>
                            <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Box sx={{ display: "flex", alignContent: "start" }}>
                                    <Box sx={{ margin: ".5rem", flexGrow: 1 }}>
                                        <LazyLoadImage style={{ height: "8rem", borderRadius: "0.625rem" }} onClick={() => { productPage(props.title) }} src={props.image} alt="" />
                                    </Box>
                                    <Box sx={{ justifyContent: "center", margin: ".5rem", flexGrow: 2, alignContent: "center" }}>
                                        <Typography onClick={() => { productPage(props.title) }} sx={{
                                            cursor: 'pointer',
                                            color: "#1C3A59",
                                            fontFamily: "Montserrat",
                                            fontSize: { md: "1.5rem", xs: "1.2rem" },
                                            fontStyle: "normal",
                                            fontWeight: "800",
                                            lineHeight: "normal",
                                            mb: 2,
                                        }}>{props.title}</Typography>
                                        <Typography sx={{
                                            color: "#1C3A59",
                                            fontFamily: "Montserrat",
                                            fontSize: { md: "1.1rem", xs: ".9rem" },
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            lineHeight: "normal",

                                        }}>Size: {props.size}</Typography>
                                        <Typography sx={{
                                            color: "#1C3A59",
                                            fontFamily: "Montserrat",
                                            fontSize: { md: "1.1rem", xs: ".9rem" },
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            lineHeight: "normal",

                                        }}>Qty: {props.qty}</Typography>
                                        <Typography sx={{
                                            color: "#1C3A59",
                                            fontFamily: "Montserrat",
                                            fontSize: { md: "1.1rem", xs: ".9rem" },
                                            fontStyle: "normal",
                                            fontWeight: "600",
                                            lineHeight: "normal",

                                        }}>Price: ${props.unitPrice * props.qty}</Typography>

                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    </Box>
                    <Box sx={lowermodal}>
                        <Box sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" sx={ButtonStyle} onClick={handleClose}>Keep Shopping</Button>
                                <Button component="a" variant="contained" sx={ButtonStyle} onClick={goToCart}>Go to Cart</Button>
                            </ThemeProvider>
                        </Box>
                        <Box sx={{ display: { md: "none", xs: "flex" }, justifyContent: "center" }}>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" sx={ButtonStyle} onClick={handleClose}>Continue</Button>
                                <Button component="a" variant="contained" sx={ButtonStyle} onClick={goToCart}>Cart</Button>
                            </ThemeProvider>
                        </Box>
                    </Box>

                </Box>
            </Modal>
        </Box >
    );
}
export default CheckoutModal;