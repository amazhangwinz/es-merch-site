import React from "react";
import { styled } from "styled-components";
import { Button, ThemeProvider, createTheme } from "@mui/material";
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const StyledContainer = styled.div`
border-radius: 40px;
// background: #FBF9F9;
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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






const Confirmationpage = () => {
    return (
        <div>
            <StyledContainer>
                {/* <CheckCircleOutlineIcon>
            </CheckCircleOutlineIcon> */}
                <Button></Button>
                <StyledText>
                    Your request has been sent!

                    Keep a look out in your inbox for a confirmation email.

                    For any further inquiries, please email contact@unswengsoc.com
                </StyledText>
            </StyledContainer>
        </div>
    )
}
export default Confirmationpage;