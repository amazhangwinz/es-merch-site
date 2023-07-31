import React from 'react';
import ItemCard from '../components/ItemCard';

const Homepage = () => {
	return (
		<div>
			<h1>HOME PAGE</h1>
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', flexFlow: "row wrap", marginLeft: '10vw', marginRight: '10vw' }}>
				<ItemCard title="Wireless Earbuds" description="b Q W b 7 n v e v 5 j L R a W 2 L M o D " image="https://helios-i.mashable.com/imagery/reviews/02TWYLkCOvrgBAYliOnHbKR/hero-image.fill.size_1200x900.v1623386276.jpg" colours={['Black', 'White', 'Red']} price={79.99} />
				<ItemCard
					title="Leather Wallet"
					description="A stylish and durable leather wallet with multiple card slots and a coin pocket."
					image="https://cdn.shopify.com/s/files/1/2475/0344/products/W01-BR_Brown_Wallet_Outside_Engrave.jpg?v=1657606872&width=2000"
					colours={['Brown', 'Black']}
					price={49.99}
				/>
				<ItemCard
					title="Fitness Tracker"
					description="Track your daily activities, heart rate, and sleep with this advanced fitness tracker."
					image="https://www.digitaltrends.com/wp-content/uploads/2017/08/garmin-fenix-5x-review-feature.jpg?resize=625%2C417&p=1"
					colours={['Blue', 'Green', 'Purple']}
					price={129.99}
				/>
				<ItemCard title="test" description="this is a description" image="https://st1.latestly.com/wp-content/uploads/2023/05/John-Cena-Dancing-With-Headphones.jpg" colours={['blue', 'red', 'orange', 'yellow']} price={12.99} />
			</div>
		</div>
	);
};

export default Homepage;
