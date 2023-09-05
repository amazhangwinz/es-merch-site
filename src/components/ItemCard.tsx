import React from 'react';
import styled from 'styled-components';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { data } from '../Data.jsx';
import { findColourImage } from '../Helpers';
import { Box, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

interface Prop {
	title: string;
	description: string;
	image: string;
	index: number;
	price: number;
}

const StyledComponent = styled.div`
	display: flex;
	height: clamp(6rem, 10vw, 12rem);
	width: clamp(18rem, 30vw, 36rem);
	border-radius: clamp(0.25rem, 0.5rem, 0.5rem);
	background: #fbf9f9;
	margin: 1.75vw;
	box-shadow: 3px 5px 2px silver;
`;

const StyledContent = styled.div`
	height: 100%;
	width: 65%;
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
	height: 100%;
	width: auto;
	max-width: 33%;
	border-radius: 0 clamp(0.25rem, 0.5rem, 0.5rem) clamp(0.25rem, 0.5rem, 0.5rem) 0;
	object-fit: cover;
`;

const StyledDescription = styled.p`
	overflow: hidden;
	word-wrap: break-word;
	color: #1c3a59;
`;

const StyledColours = styled.div`
	display: inline-flex;
	flex-direction: row;
	justify-content: flex-start;
	margin: 0;
	padding-right: 5%;
`;

const ColourCircles = styled.div`
	height: 1vw;
	width: 1vw;
	border-radius: 50%;
	box-shadow: 1px 1.5px 0.5px silver;
`;

const ItemCard = (props: Prop) => {
	const navigate = useNavigate();
	const productPage = (prodName: string) => {
		navigate({
			pathname: '/item',
			search: `?${createSearchParams({ title: prodName })}`,
		});
	};

	const [currColour, setCurrColour] = React.useState(data[props.index].colours[0].name);

	return (
		<StyledComponent
			onClick={() => {
				productPage(props.title);
			}}
			style={{ cursor: 'pointer' }}
		>
			<Box component={StyledContent}>
				{
					<Typography sx={{ variant: { xs: 'h6', md: 'h1' }, fontFamily: 'Montserrat', fontStyle: 'normal' }}>
						<b>{props.title}</b>
					</Typography>
				}
				{
					<Typography
						sx={{
							display: { xs: 'none', md: 'inline-block' },
							fontFamily: 'Montserrat',
							fontStyle: 'normal',
							overflow: 'hidden',
						}}
						variant="body2"
						paragraph={true}
					>
						{props.description}
					</Typography>
				}
				{/* <StyledColours style={{ margin: 0, marginBottom: '2.5%'}}>
					{data[props.index].colours.map((colour) => (
						<div style={{paddingRight: 'clamp(0.5rem, 0.25vw, 0.5rem)', width: '100%', height: '100%'}}>
							<ColourCircles onClick={(event) => {
								event.stopPropagation();
								setCurrColour(colour.name);}} style={{ cursor: 'pointer', background: `linear-gradient(190deg, ${colour.name}, grey 125%)` }}></ColourCircles>
						</div>
						))}
				</StyledColours> */}
				{
					<Typography variant="subtitle2" fontFamily="Montserrat" fontStyle="normal">
						<b>$ </b>
						{props.price}
					</Typography>
				}
			</Box>
			<StyledImage src={findColourImage(props.index, currColour)} alt={props.title} />
		</StyledComponent>
	);
};

export default ItemCard;
