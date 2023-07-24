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
border-radius: 2.5rem;
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
const IconContainer = styled.div`
display: flex:
justify-content: flex-start
`

const StyledText = styled.p`
color: #000;
text-align: center;
font-family: Montserrat;
font-size: 150%;
font-style: normal;
font-weight: 00;
line-height: normal;
`
const StyledImage = styled.img`
padding-left: 5rem;
padding-right: 5rem;
padding-bottom: 5rem;
`
const StyledLogo = styled.img`
display: flex;
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
                <IconContainer>
                    <StyledLogo src={englogo}></StyledLogo>
                </IconContainer>
                <StyledImage src={check}></StyledImage>
                <StyledText>
                    Your request has been sent!
                </StyledText>
                <StyledText>
                    Keep a look out in your inbox for a confirmation email. </StyledText>
                <StyledText>
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