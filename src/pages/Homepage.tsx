import React from 'react';

import EngsocLogo from '../assets/EngsocLogo.svg';
import heroImage from '../assets/winnie.jpg';
import { Hero } from '../components/Hero';
import ItemCard from '../components/ItemCard';
import { data } from '../Data.jsx';
import { Box, Typography } from '@mui/material';

const Homepage = () => {
	return (
		<div>
			<Hero title="EngSoc 2023" tagLine="Braincells not included." image={heroImage} itemName="test"></Hero>
			<Box
				sx={{ flexFlow: { md: 'row wrap', xs: 'column' } }}
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: '10vw',
					marginRight: '10vw',
				}}
			>
				{data.map((item, idx) => {
					return <ItemCard title={item.name} description={item.description} image={item.default} index={idx} price={item.price} />;
				})}
			</Box>
		</div>
	);
};

export default Homepage;
