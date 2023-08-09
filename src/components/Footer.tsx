import React from 'react';
import footerWaves from '../assets/Waves.svg';
import emailLogo from '../assets/emailLogo.svg';
import engsocLogoFooter from '../assets/engsocLogoFooter.svg';
import igLogo from '../assets/igLogo.svg';
import {
  Typography,
  Box,
} from '@mui/material';
import styled from "styled-components";


const StyledImg = styled.img`
  width: 100vw;
  position: relative;
  margin-top: -10vh;
`;

const Icons = styled.img`
  width: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  bottom: 3vh;
  z-index: 2;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 20%;
`;


const Footer = () => {

  return (
    <Box
      component="footer"
      sx={{
        // backgroundColor: '#1C3A59',
        textAlign: 'center',
        fontSize: '14px',
        width: '100vw',
        position: 'absolute',
        bottom: 0,
      }}
    >
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


      <StyledImg src={footerWaves} />
    </Box >
  )
}

export default Footer;
