import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import {
    Button,
    ThemeProvider,
    createTheme,
    Box,
    Typography
} from "@mui/material";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import check from "../assets/check.png"
import englogo from "../assets/EngsocLogo.svg"


const StyledContainer = {
    borderRadius: "2.5rem",
    background: "#FBF9F9",
    boxshadow: "0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: { md: "3rem", xs: 'none' },
    margin: { md: "5rem", xs: "none" },
    marginLeft: { md: "12rem", xs: "1rem" },
    marginRight: { md: "12rem", xs: "1rem" },
    marginTop: { md: "none", xs: "1rem" },
    marginBottom: { md: "none", xs: "1rem" },
    minWidth: { md: "35rem", xs: "325px" },
}
const IconContainer = {
    display: { md: "flex", xs: "none" },
    flexGrow: "1",
    width: "100%",
}

const StyledText = {
    color: "#000",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: { md: "150%", xs: "125%" },
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    maxWidth: { md: "60%", xs: "80%" },
    margin: '1rem',
}

const StyledImage = styled.img`
padding-left: 5rem;
padding-right: 5rem;
padding-bottom: 1rem;
padding-top: 1rem;
`
const StyledLogo = styled.img`

`
const backtoshoppingButtonStyle = {
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '125%',
    fontWeight: '500',
    contrastText: 'black',
    borderRadius: '3.125rem',
    background: '#D9D9D9',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    margin: '1rem',
    padding: '1rem',
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


const Confirmationpage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Box sx={StyledContainer}>
                <Box sx={IconContainer}>
                    <StyledLogo src={englogo}></StyledLogo>
                </Box>
                <StyledImage src={check}></StyledImage>
                <Typography variant="h1" sx={StyledText}>
                    Your request has been sent!
                </Typography>
                <Typography variant="h1" sx={StyledText}>
                    Keep a look out in your inbox for a confirmation email.
                </Typography>
                <Typography variant="h1" sx={StyledText}>
                    For any further inquiries, please email contact@unswengsoc.com
                </Typography>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" onClick={() => navigate('/')} sx={backtoshoppingButtonStyle}>Back to Shopping</Button>
                </ThemeProvider>
            </Box>
        </div >
    )
}
export default Confirmationpage;