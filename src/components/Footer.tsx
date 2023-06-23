import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import footerWaves from '../assets/Waves.svg';
import emailLogo from '../assets/emailLogo.svg';
import engsocLogoFooter from '../assets/engsocLogoFooter.svg';
import igLogo from '../assets/igLogo.svg';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
} from '@mui/material';
import styled from "styled-components";

/**
 * MUI is an extensive component library with some very useful components that
 * makes styling a lot easier. Visit the documentation for more info.
 * @link https://mui.com/
*/

/**
 * Styled Components are "visual primitives for components". This is a flexible
 * way to style components in React without reapeating yourself. 
 * @link https://styled-components.com/docs/basics
*/
const StyledImg = styled.img`
  width: 100vw;
  position: relative;
  z-index = 1;
`;

const Icons = styled.img`
  width: 5rem;
  cursor: pointer;
  position: relative;
  z-index = 5;
`;


const Footer = () => {
  const navigate = useNavigate();

  const homeLink = () => {
    navigate("/")
  }

  return(
    <div className = "Footer">

        <a href = "https://instagram.com/unswengsoc?igshid=MzRlODBiNWFlZA=="> <Icons src={igLogo} /> </a>
        <a onClick = {homeLink}> <Icons src={engsocLogoFooter} /> </a>
        <a href = "mailto:contact@unswengsoc.com"> <Icons src={emailLogo} /> </a> 


        <StyledImg src={footerWaves} />

        

          <Typography>
            Contact Us
          </Typography>

    </div>
  )
}

export default Footer;
