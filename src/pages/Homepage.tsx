import React, { useEffect, useState } from 'react';
import heroImage from '../assets/wholeEngSoc.webp';
import { Hero } from '../components/Hero';
import ItemCard from '../components/ItemCard';
import { data } from '../Data.jsx';
import { Box } from '@mui/material';

const Homepage = () => {

	return (
		<div>
			<Hero
				title="EngSoc 2023"
				tagLine="Braincells not included."
				image={heroImage}
				itemName="test"
			/>

			<Box
				sx={{ flexFlow: { md: 'row wrap', xs: 'column' } }}
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: '10vw',
					marginRight: '10vw',
					zIndex: '1',
				}}
			>
				{data.map((item, idx) => {
					return (
						<ItemCard
							title={item.name}
							description={item.description}
							image={item.default}
							index={idx}
							price={item.price}
						/>)
				})}
			</Box>
		</div>
	);
};

export default Homepage;
