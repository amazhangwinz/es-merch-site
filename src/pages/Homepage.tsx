import heroImage from '../assets/wholeEngSoc.webp';
import { Hero } from '../components/Hero';
import ItemCard from '../components/ItemCard';
import { data } from '../Data.jsx';
import { Box } from '@mui/material';

const Homepage = () => {

	return (
		<Box >
			<Hero
				title="EngSoc 2023"
				tagLine="Braincells not included."
				image={heroImage}
				itemName="test"
			/>

			<Box
				sx={{
					display: "flex",
					flex: "1 1 0",
					flexDirection: { md: "row", xs: "column" },
					justifyContent: "space-around",
					alignItems: "center",
					flexWrap: { md: "wrap", xs: "nowrap" },
				}
				}
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
		</Box >
	);
};

export default Homepage;
