import React from 'react';
import footerWaves from '../assets/Waves.svg';
import emailLogo from '../assets/emailLogo.svg';
import engsocLogoFooter from '../assets/engsocLogoFooter.svg';
import igLogo from '../assets/igLogo.svg';
import {
  Typography,
} from '@mui/material';
import styled from "styled-components";

const StyledFooter = styled.div`
  margin-top: auto;
  width: 100vw;
  height: 300px;
  background-image: url(${footerWaves});
  background-size: cover;
`

const Container = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const IconContainer = styled.div`
  margin-top: 300px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 20%;
`;

const Icons = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  padding: 5px;
  background-color: rgb(0, 0, 0, 0.2);
  border-radius: 5px;
`;


const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <IconContainer>
          <a href="https://instagram.com/unswengsoc?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <Icons src={igLogo} />
          </a>
          <a href="https://www.unswengsoc.com/" target="_blank" rel="noopener noreferrer">
            <Icons src={engsocLogoFooter} />
          </a>
          <a href="mailto:contact@unswengsoc.com">
            <Icons src={emailLogo} />
          </a>
        </IconContainer>

        <Typography
          variant="subtitle1"
          fontWeight='400'
          sx={{
            textAlign: 'center',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          Contact Us!
        </Typography>
      </Container>
    </StyledFooter >
  )
}

export default Footer;
