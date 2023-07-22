import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Quantity from './Quantity';

interface Prop {
	image: string;
	title: string;
	description: string;
	colour: string;
	size: string;
	unitPrice: number;
	quantity: number;
	removeItem: string;
}

const StyledProduct = styled.div`
	display: flex;
	height: 20vw;
	width: 90vw;
	background: #fbf9f9;
	margin: 1.75vw;
	border: 1px solid black;
	border-radius: 1vw;
	padding: 1.5vw 1.5vw
`;

const StyledProperty = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	// border: 1px solid black
`;

const StyledImage = styled.img`
	width: 100%;
`;
// const StyledImage = styled.img`
// 	width: ${(props) => props.width || "100%"};
// `;

const StyledText = styled.div`
	padding: 1rem;
	// box-sizing: border-box;
	text-align: left;
`;

const StyledTitle = styled.div`
	font-size: 2.5vw	
`;

const StyledInfo = styled.div`
	font-size: 1.5vw
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const CartCard = (props: Prop) => {
	const [quantity, setQuantity] = useState(props.quantity);
	const total = props.unitPrice * quantity;

	// const handleQuantityChange = (newQuantity: number) => {
	// 	setQuantity(newQuantity);
	// };
	
	return (
		<StyledProduct>
			<StyledProperty style = {{width: '20%'}}>
  				<StyledImage src={props.image} alt=""/>
			</StyledProperty>
			<StyledProperty style = {{width: '30%', justifyContent: 'left' }}> 
				<StyledText>
					<StyledTitle style = {{fontWeight: 'bold', marginBottom: '1vw'}}>{props.title}</StyledTitle>
					<StyledInfo>
						<BoldText>Product:</BoldText> {props.description}
					</StyledInfo>
					<StyledInfo>
						<BoldText>Colour:</BoldText> {props.colour}
					</StyledInfo>
					<StyledInfo>
						<BoldText>Size:</BoldText> {props.size}
					</StyledInfo>
					<StyledInfo>
						<BoldText>Unit Price:</BoldText> ${props.unitPrice}
					</StyledInfo>
				</StyledText>
			</StyledProperty>
			<StyledProperty style = {{width: '20%'}}> 
				<Quantity count={quantity} onCountChange={setQuantity} />
			</StyledProperty>
			<StyledProperty style = {{width: '10%'}}> 
				<StyledImage style = {{width: '30%'}}src={props.removeItem} alt=""/>
			</StyledProperty>
			<StyledProperty style = {{width: '20%'}}>  
				<StyledTitle>${total}</StyledTitle>
			</StyledProperty>
		</StyledProduct>
	);
};

export default CartCard;