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
				{
					<LazyLoadImage
						src={props.image}
						style={{ width: '50vh', height: '50vh', objectFit: 'cover', padding: '10%' }}
						alt={props.itemName}
					></LazyLoadImage>
				}
				{
					<Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '60vw' }}>
						{
							<Typography
								sx={{ fontFamily: 'montserrat', color: 'rgba(17,22,30,1)' }}
								variant="h4"
								onClick={() => {
									productPage(props.itemName);
								}}
							>
								<b>{props.title}</b>
							</Typography>
						}
						{
							<Typography sx={{ fontFamily: 'montserrat', color: 'rgba(17,22,30,1)' }} variant="subtitle2">
								{props.tagLine}
							</Typography>
						}
					</Box>
				}
			</Box>
		</div>
	);
};
