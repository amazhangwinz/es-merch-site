import React from 'react';
import ItemCard from '../components/ItemCard';
import { data } from '../Data.jsx';

const Homepage = () => {
	return (
		<div>
			<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', flexFlow: "row wrap", marginLeft: '10vw', marginRight: '10vw' }}>
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
			</div>
		</div>
	);
};

export default Homepage;
