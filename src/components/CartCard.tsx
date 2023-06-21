import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface Prop {
	image: string;
	title: string;
	description: string;
	colour: string;
	size: string;
	unitPrice: number;
	quantity: string;
	removeItem: string;
	total: number;
}

const StyledProduct = styled.div`
	display: flex;
	height: 20vw;
	width: 90vw;
	background: #fbf9f9;
	margin: 1.75vw;
	border: 1px solid black
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
	box-sizing: border-box;
	text-align: left;
`;

const StyledTitle = styled.div`
	font-size: 200%
`;

const StyledInfo = styled.div`
	font-size: 100%
`;

const CartCard = (props: Prop) => {
	return (
		<StyledProduct>
			<StyledProperty style = {{width: '20%'}}>
  				<StyledImage style = {{width: '100%'}} src={props.image} alt=""/>
			</StyledProperty>
			<StyledProperty style = {{width: '30%'}}> 
				<StyledText>
					<StyledTitle>{props.title}</StyledTitle>
					<StyledInfo>Product: {props.description}</StyledInfo>
					<StyledInfo>Colour: {props.colour}</StyledInfo>
					<StyledInfo>Size: {props.size}</StyledInfo>
					<StyledInfo>Unit Price: ${props.unitPrice}</StyledInfo>
				</StyledText>
			</StyledProperty>
			<StyledProperty style = {{width: '20%'}}> 
				<StyledImage style = {{width: '65%'}} src={props.quantity} alt=""/>
			</StyledProperty>
			<StyledProperty style = {{width: '10%'}}> 
				<StyledImage style = {{width: '30%'}}src={props.removeItem} alt=""/>
			</StyledProperty>
			<StyledProperty style = {{width: '20%'}}>  
				<StyledTitle>${props.total}</StyledTitle>
			</StyledProperty>
		</StyledProduct>
	);
};

export default CartCard;