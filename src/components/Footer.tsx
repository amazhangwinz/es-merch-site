import React from 'react';
import lol from '../assets/lol.svg';
import EngsocLogo from '../assets/EngsocLogo.svg';
import mail from '../assets/mail.svg';
import Waves from '../assets/Waves.svg';


import {
    Box,
    AppBar,
    Toolbar,
    Typography,
  } from '@mui/material';
  import styled from "styled-components";

  const StyledImg1 = styled.img`
  margin-left: 40vw;
  margin-right: 1.5vw;
  width: 1.5rem;
`;
const StyledImg2 = styled.img`
  margin-left: 1.5vw;
  margin-right: 1.5vw;

  width: 1.5rem;
`;
const StyledImg3 = styled.img`
  margin-left: 1.5vw;
  margin-right: 33vw;

  width: 1.5rem;
`;
  


  const footer = () => {
    return (
        <Box
          component="footer"
          sx={{
            backgroundColor: '#1C3A59',
            flewgrow: 1,
            textAlign: 'center',
            fontSize: '14px',
            color: '#666',
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
          }}
        >
        <Toolbar>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"> {/* Add the desired link for the first image */}
          <StyledImg1 src={lol} />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"> {/* Add the desired link for the second image */}
          <StyledImg2 src={EngsocLogo} />
        </a>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"> {/* Add the desired link for the third image */}
          <StyledImg3 src={mail} />
        </a>
        <Typography
          variant="subtitle1"
          fontWeight='400'
          sx={{
            ml: '40vw',
            cursor: 'pointer',
          }}
        >
          Contact Us!
        </Typography>
      </Toolbar>
        </Box>
      );

  };

  export default footer;

  