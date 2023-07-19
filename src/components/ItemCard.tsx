import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface Prop {
	title: string;
	description: string;
	image: string;
	colours: string[];
	price: number;
}

const StyledComponent = styled.div`
	display: flex;
	height: clamp(6rem, 10vw, 10rem);
	width: clamp(18rem, 30vw, 30rem);
	border-radius: 0.75vw;
	background: #fbf9f9;
	margin: 1.75vw;
	box-shadow: 3px 5px 2px silver;
`;

const StyledContent = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 1vw;
	box-sizing: border-box;
	align-items: flex-start;
`;

const StyledImage = styled.img`
	height: 100%;
	width: auto;
	max-width: 33%;
	border-radius: 0 0.75vw 0.75vw 0;
`;

const StyledPrice = styled.p`
	margin-bottom: 0;
	font-size: clamp(1.1rem, 1.1vw, 1.5rem);
`;

const StyledTitle = styled.h1`
	margin-bottom: 0;
	height: clamp(2rem, 2.5vw, 3rem);
	font-size: clamp(1.25rem, 1.25vw, 1.5rem);
	margin: 0;
	cursor: pointer;
`;

const StyledDescription = styled.p`
	margin: 0;
	width: 100%;
	height: clamp(10rem, 25vw, 25rem);
	overflow: hidden;
	text-overflow: ellipsis;
	overflow: hidden;
	word-wrap: break-word;
	font-size: clamp(1rem, 1vw, 1.2rem);
`;

const StyledColours = styled.p`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	margin: 0;
`;

const ColourCircles = styled.div`
	height: 1.4vw;
	width: 1.4vw;
	border-radius: 50%;
	margin: 0;
	margin-right: 0.5rem;
	box-shadow: 1px 1.5px 0.5px silver;
`;

const ItemCard = (props: Prop) => {
	const navigate = useNavigate();
	const productPage = () => {
		navigate('/product');
	};

	return (
		<StyledComponent>
			<StyledContent>
				<StyledTitle onClick={productPage}>{props.title}</StyledTitle>
				<StyledDescription style={{ margin: 0, textAlign: 'left', height: '3rem' }}>{props.description}</StyledDescription>
				<StyledPrice style={{ margin: 0, marginBottom: 5 }}>
					<b>$</b>
					{props.price}
				</StyledPrice>
				<StyledColours style={{ margin: 0 }}>
					{props.colours.map((colour) => (
						<ColourCircles style={{ background: `linear-gradient(190deg, ${colour}, grey 125%)` }}></ColourCircles>
					))}
				</StyledColours>
			</StyledContent>
			<StyledImage src={props.image} alt="" />
		</StyledComponent>
	);
};

export default ItemCard;
