import { useEffect, useState } from 'react';
import heroImage from '../assets/wholeEngSoc.webp';
import { Hero } from '../components/Hero';
import ItemCard from '../components/ItemCard';
import { data } from '../Data.jsx';
import { Box } from '@mui/material';

const Homepage = () => {
	// might be a lil jittery at the moment, could use a react module for smoother scroll
	const [offsetY, setOffsetY] = useState(0)
	const handleScroll = () => setOffsetY(window.scrollY)

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<div>
			<div style={{ transform: `translateY(${offsetY * 0.6}px)` }}>
				<Hero
					title="EngSoc 2023"
					tagLine="Braincells not included."
					image={heroImage}
					itemName="test"
				/>
			</div>

			<Box
				sx={{ flexFlow: { md: 'row wrap', xs: 'row wrap' } }}
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'flex-start',
					position: 'relative',
					zIndex: '2',
					background: '#ececec',
					width: 'calc(100% - 10vw)',
					padding: '0 5vw',
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
