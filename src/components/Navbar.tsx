import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EngsocLogo from '../assets/EngsocLogo.svg';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

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
const StyledImgBig = styled.img`
	width: 2rem;
  margin-right: 15px;
  cursor: pointer;
`;

const StyledImgSmall = styled.img`
	width: 1.5rem;
  margin-right: 15px;
  cursor: pointer;
`;

const Navbar = () => {
	// used to switch pages
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

	const [page, setPage] = useState('home');

	const navigate = useNavigate();

	const homeLink = () => {
		navigate('/');
		setPage('home');
	};

	const cartLink = () => {
		navigate('/cart');
		setPage('cart');
	};
  const pages = [{name: "Home", function: homeLink}, {name: "Cart", function: cartLink}];


  return (
    <AppBar position="static" sx={{ backgroundColor: '#1C3A59' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }}}><StyledImgBig onClick={homeLink} src={EngsocLogo} /></Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
            onClick={homeLink}
          >
            ENGSOC MERCH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={page.function}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }}}><StyledImgSmall onClick={homeLink} src={EngsocLogo} /></Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
            onClick={homeLink}
          >
            ENGSOC MERCH
          </Typography>
          <Box sx={{ flexGrow: 10, display: { xs: "none", md: "flex" } }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={page.function}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;



  
