import React from "react";
import { styled } from "styled-components";
import {
    Button,
    ThemeProvider,
    createTheme
} from "@mui/material";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import check from "../assets/check.png"
import englogo from "../assets/EngsocLogo.svg"


const StyledContainer = styled.div`
border-radius: 40px;
background: #FBF9F9;
box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);
display: flex;
align-items: center;
flex-direction: column;
padding: 3rem;
margin: 5rem;
margin-left: 12rem;
margin-right: 12rem;
`
const StyledText = styled.text`
color: #000;
text-align: center;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const StyledImage = styled.img`
padding: 5rem;
`
const StyledLogo = styled.img`
position: absolute;
left: 16rem;
top: 12rem;
`
const backtoshoppingButtonStyle = {

    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontSize: '20px',
    fontWeight: '400',
    contrastText: 'black',
    borderRadius: '50px',
    background: '#D9D9D9',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    margin: '4rem',
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
    return (
        <div>
            <StyledContainer>
                {/* <CheckCircleOutlineIcon>
            </CheckCircleOutlineIcon> */}
                <StyledLogo src={englogo}></StyledLogo>
                <StyledImage src={check}></StyledImage>
                <StyledText>
                    Your request has been sent! <br></br> <br></br>

                    Keep a look out in your inbox for a confirmation email. <br></br> <br></br>

                    For any further inquiries, please email <br></br>contact@unswengsoc.com
                </StyledText>

                <ThemeProvider theme={theme}>
                    <Button variant="contained" sx={backtoshoppingButtonStyle}>Back to Shopping</Button>
                </ThemeProvider>
            </StyledContainer>
        </div>
    )
}
export default Confirmationpage;