import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import {
    Box,
    Modal,
    Button,
    Typography,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { cartContext } from "../App";
import Bin from "../assets/Bin.webp"

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
    justifyContent: { md: "center", xs: "center" },
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
    borderRadius: '50px',
    background: '#D9D9D9',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: { md: '12px', xs: "70%" },
    fontWeight: '600',
    contrastText: 'black',
    // flex: '1 1 0',
    m: '.5rem',
    pt: { md: '.8rem', xs: ".5rem" },
    pb: { md: '.8rem', xs: ".5rem" },
}

// const addCartButtonStyle = {
//     borderRadius: '13px',
//     background: '#FB9E9E',
//     textAlign: 'center',
//     fontFamily: 'Montserrat',
//     fontStyle: 'normal',
//     fontSize: { md: '110%', xs: "90%" },
//     fontWeight: '500',
//     contrastText: 'black',
//     paddingLeft: { md: '2rem', xs: "1rem" },
//     paddingRight: { md: '2rem', xs: "1rem" },
//     height: { md: '70%', xs: "130%" },
//     alignSelf: 'center'
// }

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

type CartRemovalModalProps = {
    title: string;
    size: string;
    image: string;
    unitPrice: number;
    qty: number;
}

const CartRemovalModal = (props: CartRemovalModalProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const { cart, setCart } = React.useContext(cartContext);

    // const goToCart = () => {
    //     navigate("/cart")
    // }
    const productPage = (prodName: string) => {
        navigate({
            pathname: '/item',
            search: `?${createSearchParams({ title: prodName })}`,
        });
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    };
    const deleteCard = (value: String) => {
        const updatedCart = cart.filter((CartItem) => CartItem.name !== value)
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        console.log("meow");
        console.log(updatedCart);
    }

    return (
        <Box sx={{ justifyContent: "space-around", alignContent: "center", display: 'flex', margin: { md: '1rem', xs: 0 } }}>
            <ThemeProvider theme={theme}>
                <LazyLoadImage onClick={() => {
                    handleOpen()
                }} style={{ width: '2rem', height: "2rem", marginLeft: "5rem", cursor: 'pointer' }} src={Bin} alt="Bin Item" />
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
                            Remove Item ?
                        </Typography>
                        <Box sx={{ display: 'flex', borderTop: "1px solid #d9d9d9", mt: "1rem", maxWidth: "370px" }}>
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
                        <Box sx={{ display: { md: "flex", xs: "none" } }}>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" sx={ButtonStyle} onClick={() => { deleteCard(props.title); handleClose(); }}>Remove Item</Button>
                                <Button component="a" variant="contained" sx={ButtonStyle} onClick={handleClose}>Keep Item</Button>
                            </ThemeProvider>
                        </Box>
                        <Box sx={{ display: { md: "none", xs: "flex" } }}>
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" sx={ButtonStyle} onClick={() => { deleteCard(props.title); handleClose(); }}>Remove</Button>
                                <Button component="a" variant="contained" sx={ButtonStyle} onClick={handleClose}>Keep</Button>
                            </ThemeProvider>
                        </Box>
                    </Box>

                </Box>
            </Modal>
        </Box >
    );
}
export default CartRemovalModal;