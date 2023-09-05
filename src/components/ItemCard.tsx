import React from 'react';
import styled from 'styled-components';
import { createSearchParams, useNavigate } from 'react-router-dom';

interface Prop {
	title: string;
	description: string;
	image: string;
	index: number;
	price: number;
}

const StyledComponent = styled.div`
	display: flex;
	height: clamp(6rem, 10vw, 10rem);
	width: clamp(18rem, 30vw, 30rem);
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

const StyledTitle = styled.h1`
	margin-bottom: 0;
	height: clamp(2rem, 2.5vw, 3rem);
	font-size: clamp(1.25rem, 1.2vw, 1.5rem);
	margin: 0;
	cursor: pointer;
	font-family: Montserrat;
    font: Regular;
	font-weight: 800;
    color: #1C3A59;
`;

const StyledPrice = styled.p`
	margin-bottom: 0;
	font-size: clamp(1rem, 1vw, 1.5rem)
	font-family: Montserrat;
    font: Regular;
	font-weight: 500;
    color: #1C3A59;
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
		navigate({
			pathname: '/item',
			search: `?${createSearchParams({ title: prodName })}`,
		});
	};

	// const [currColour, setCurrColour] = React.useState(data[props.index].colours[0].name);

	return (
		<StyledComponent onClick={() => { productPage(props.title) }} style={{ cursor: 'pointer' }}>
			<StyledContent >
				<StyledTitle style={{ margin: 0, cursor: 'pointer' }}>
					{props.title}
				</StyledTitle>
				{/* <StyledDescription style={{ margin: 0, textAlign: 'left'}}>{props.description}</StyledDescription> */}
				{/* <StyledColours style={{ margin: 0, marginBottom: '2.5%'}}>
					{data[props.index].colours.map((colour) => (
						<div style={{paddingRight: 'clamp(0.5rem, 0.25vw, 0.5rem)', width: '100%', height: '100%'}}>
							<ColourCircles onClick={(event) => {
								event.stopPropagation();
								setCurrColour(colour.name);}} style={{ cursor: 'pointer', background: `linear-gradient(190deg, ${colour.name}, grey 125%)` }}></ColourCircles>
						</div>
						))}
				</StyledColours> */}
				<StyledPrice style={{ margin: 0 }}><b>${props.price}</b></StyledPrice>
			</StyledContent>
			<StyledImage src={
				props.image
				// findColourImage(props.index, currColour)
			} alt={props.title} />
		</StyledComponent>
	);
};

export default ItemCard;
