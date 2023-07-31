import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EngsocLogo from '../assets/EngsocLogo.svg';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

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
	// used to switch pages

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

	return (
		<Box sx={{ flexGrow: 1, position: 'sticky', top: '0' }}>
			<AppBar position="static" sx={{ backgroundColor: '#1C3A59' }}>
				<Toolbar>
					<StyledImg src={EngsocLogo} />
					<Typography variant="h1" fontSize="2.5rem" fontWeight="400" sx={{ ml: '2rem', cursor: 'pointer' }} onClick={homeLink}>
						ENGSOC MERCH
					</Typography>

					<Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={cartLink}>
						Cart
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
