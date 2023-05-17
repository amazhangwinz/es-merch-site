import React from 'react';
import EngsocLogo from '../assets/EngsocLogo.svg';
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
  width: 2.5rem;
`;


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <StyledImg src={EngsocLogo} />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;
