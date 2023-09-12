import { useNavigate } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Prop {
	title: string;
	tagLine: string;
	image: string;
	itemName: string;
}

export const Hero = (props: Prop) => {
	const navigate = useNavigate();
	const productPage = (prodName: string) => {
		navigate({
			pathname: '/item',
			search: `?${createSearchParams({ title: prodName })}`,
		});
	};

	return (
		<div>
			<Box
				sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', justifyContent: 'space-evenly' }}
				style={{ background: 'linear-gradient(194deg, rgba(28,55,98,1) 0%, rgba(236,236,236,1) 60%)', height: '60vh', width: '100vw', marginBottom: '6vh' }}
			>
				{
					<Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '35vh', maxWidth: '30vw' }}>
						{
							<Typography
								sx={{ fontFamily: 'montserrat', color: 'rgba(17,22,30,1)' }}
								variant="h3"
							>
								<b>{props.title}</b>
							</Typography>
						}
						{
							<Typography sx={{ fontFamily: 'montserrat', color: 'rgba(17,22,30,1)' }} variant="subtitle1">
								{props.tagLine}
							</Typography>
						}
					</Box>
				}

				{
					<LazyLoadImage
						src={props.image}
						style={{ height: '50vh', width: '50vh', objectFit: 'cover', marginTop: '10vh' }}
						alt={props.itemName}
					></LazyLoadImage>
				}
			</Box>
			<Box
				sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', alignItems: 'center' }}
				style={{ background: 'linear-gradient(184deg, rgba(28,55,98,1) 0%, rgba(236,236,236,1) 70%)', height: '60vh', width: '100vw' }}
			>
				<Box>
					<img
						src={props.image}
						style={{ width: "100%", height: '50vh', objectFit: 'cover', }}
						alt={props.itemName}
					/>
					<Box sx={{
						position: "absolute", width: "100%", height: "50vh", boxShadow: "inset 0px -4rem 1rem -1rem rgb(236, 236, 236)",
						top: '4rem',
						left: 0,
					}} />
				</Box>
				<Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '90vw', zIndex: 1, position: "relative", bottom: "18rem", background: "rgba(35, 30, 30, 0.5)", boxShadow: "0 0 10px 10px rgba(35, 30, 30, 0.50) " }}>


					<Typography
						sx={{ fontFamily: 'montserrat', color: 'white', }}
						variant="h4"
					>
						<b>{props.title}</b>
					</Typography>

					<Typography sx={{ fontFamily: 'montserrat', color: 'white' }} variant="subtitle2">
						{props.tagLine}
					</Typography>

				</Box>

			</Box>
		</div >
	);
};
