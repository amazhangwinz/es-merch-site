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
	height: 13rem;
	width: 75rem;
	// background: #fbf9f9;
	margin-bottom: 1.75rem;
	border: 1px solid black;
`;

const StyledProperty = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	// border: 1px solid black
`;

const StyledImage = styled.img`
	width: 100%;
	// border-radius: 1rem
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
	font-size: 1.625rem	
`;

const StyledInfo = styled.div`
	font-size: 1.25rem
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
      <StyledProperty style = {{ width: '50%', justifyContent: 'left' }}>
        <StyledProperty style = {{ width: '13rem'}}>
            <StyledImage src={props.image} alt=""/>
        </StyledProperty>
        <StyledProperty style = {{ justifyContent: 'left' }}> 
          <StyledText>
            <StyledTitle style = {{fontWeight: 'bold'}}>{props.title}</StyledTitle>
            <StyledInfo>
              <br/>
            </StyledInfo>
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
      </StyledProperty>
			<StyledProperty style = {{width: '20%'}}> 
				<Quantity count={quantity} onCountChange={setQuantity} />
			</StyledProperty>
			<StyledProperty style = {{width: '10%'}}> 
				<StyledImage style = {{width: '28%'}}src={props.removeItem} alt=""/>
			</StyledProperty>
			<StyledProperty style = {{width: '20%'}}>  
				<StyledTitle>${total}</StyledTitle>
			</StyledProperty>
		</StyledProduct>
	);
};

export default CartCard;