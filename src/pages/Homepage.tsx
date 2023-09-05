import React from 'react';
import ItemCard from '../components/ItemCard';
import { data } from '../Data.jsx';
import { Box } from '@mui/material';

const Homepage = () => {
	return (
		<div>
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
