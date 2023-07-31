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
	height: 10vw;
	width: 25vw;
	border-radius: 10px;
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
	padding: 2rem;
	box-sizing: border-box;
	align-items: flex-start;
	position: relative;
`;

const StyledImage = styled.img`
	height: 100%;
	width: auto;
	max-width: 33%;
	border-radius: 0 10px 10px 0;
	object-fit: cover;
`;

const StyledPrice = styled.p`
	margin-bottom: 0;
	font-size: 95%
`;

const StyledDescription = styled.p`
	max-width: 100%;
	max-height: 70%;
	overflow: hidden;
	text-overflow: ellipsis;
	overflow: hidden;
	word-wrap: break-word;
	font-size: 95%;
`;

const StyledColours = styled.p`
	display: inline-flex;
	flex-direction: row;
	justify-content: flex-start;
	margin: 0;
	padding-right: 5%
`;

const ColourCircles = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
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
				<h1 onClick={productPage} style={{ margin: 0, cursor: 'pointer', fontSize: '125%' }}>
					{props.title}
				</h1>
				<StyledDescription style={{ margin: 0, textAlign: 'left'}}>{props.description}</StyledDescription>
				<StyledColours style={{ margin: 0, marginBottom: '2.5%'}}>
					{props.colours.map((colour) => (
						<div style={{paddingRight: '5%', width: '100%', height: '100%'}}>
							<ColourCircles style={{ background: `linear-gradient(190deg, ${colour}, grey 125%)` }}></ColourCircles>
						</div>
						))}
				</StyledColours>
				<StyledPrice style={{ margin: 0 }}><b>${props.price}</b></StyledPrice>
			</StyledContent>
			<StyledImage src={props.image} alt="" />
		</StyledComponent>
	);
};

export default ItemCard;
