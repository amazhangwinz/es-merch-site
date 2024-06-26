import React from 'react';
import styled from 'styled-components';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

interface Prop {
	title: string;
	description: string;
	image: string;
	index: number;
	price: number;
}

const StyledContent = styled.div`
	height: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	padding: clamp(1rem, 7.5%, 1.5rem);
	box-sizing: border-box;
	align-items: flex-start;
	position: relative;
`;

const StyledImage = styled.img`
	// height: 100%;
	width: 90%;
	margin-left: 5%;
	margin-top: 5%;
	// max-width: 33%;
	border-radius: 0 clamp(0.25rem, 0.5rem, 0.5rem) clamp(0.25rem, 0.5rem, 0.5rem) 0;
	object-fit: cover;
`;


// const StyledDescription = styled.p`
// 	max-width: 100%;
// 	max-height: 70%;
// 	overflow: hidden;
// 	text-overflow: ellipsis;
// 	overflow: hidden;
// 	word-wrap: break-word;
// 	font-size: clamp(1rem, 1vw, 1.5rem);
// 	padding-bottom: 5%;
// 	font-family: Montserrat;
//     font: Regular;
// 	font-weight: 500;
//     color: #1C3A59;
// `;

// const StyledColours = styled.div`
// 	display: inline-flex;
// 	flex-direction: row;
// 	justify-content: flex-start;
// 	margin: 0;
// 	padding-right: 5%
// `;

// const ColourCircles = styled.div`
// 	height: 1vw;
// 	width: 1vw;
// 	border-radius: 50%;
// 	box-shadow: 1px 1.5px 0.5px silver;
// `;

const ItemCard = (props: Prop) => {
	const navigate = useNavigate();
	const productPage = (prodName: string) => {
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
		navigate({
			pathname: '/item',
			search: `?${createSearchParams({ title: prodName })}`,
		});

	};

	// const [currColour, setCurrColour] = React.useState(data[props.index].colours[0].name);

	return (
		<>
			<Box
				sx={{
					display: { xs: 'none', md: 'flex' },
					cursor: 'pointer',
					flexDirection: 'column',
					width: 'auto',
					maxWidth: '45%',
					borderRadius: '0.5rem',
					margin: '1.75vw',
					background: '#fbf9f9',
					boxShadow: '3px 5px 2px silver',
				}}
				onClick={() => {
					productPage(props.title);
				}}
			>
				<StyledImage src={
					props.image
					// findColourImage(props.index, currColour)
				} alt={props.title} />
				<Box component={StyledContent}>
					{
						<Typography sx={{ fontSize: { xs: '0.8rem', md: '2rem' }, fontFamily: 'Montserrat', fontStyle: 'normal' }}>
							<b>{props.title}</b>
						</Typography>
					}
					<Typography sx={{ m: 0, fontFamily: 'Montserrat', color: '#1C3A59', fontSize: { xs: '0.7rem', md: '1.4rem' } }}><b>${props.price}</b></Typography>
				</Box>
			</Box>

			<Box
				sx={{
					display: { xs: 'flex', md: 'none' },
					cursor: 'pointer',
					flexDirection: 'column',
					width: 'auto',
					maxWidth: '75%',
					borderRadius: '0.5rem',
					margin: '1.75vw',
					background: '#fbf9f9',
					boxShadow: '3px 5px 2px silver',
				}}
				onClick={() => {
					productPage(props.title);
				}}
			>
				<StyledImage src={
					props.image
				} alt={props.title} />
				<Box component={StyledContent}>
					{
						<Typography sx={{ fontSize: { xs: '0.8rem', md: '2rem' }, fontFamily: 'Montserrat', fontStyle: 'normal' }}>
							<b>{props.title}</b>
						</Typography>
					}
					<Typography sx={{ m: 0, fontFamily: 'Montserrat', color: '#1C3A59', fontSize: { xs: '0.7rem', md: '1.4rem' } }}><b>${props.price}</b></Typography>
				</Box>
			</Box >
		</>
	);
};

export default ItemCard;
