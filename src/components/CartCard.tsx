import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, createSearchParams } from 'react-router-dom';
import Bin from '../assets/Bin.png'
import Quantity from './Quantity';
import {data} from '../Data.jsx';
import ColourButtonCartPage from './ColourButtonCartPage';
import SizeButtonCartPage from './SizeButtonCartPage';

interface Prop {
	image: string;
	title: string;
	unitPrice: number;
	index: number;
}

const StyledProduct = styled.div`
	display: flex;
	height: 13rem;
	width: 75rem;
	// background: #fbf9f9;
	margin-bottom: 2rem;
	// border: 1px solid black;
`;

const StyledProperty = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	// border: 1px solid black
`;

const StyledImage = styled.img`
	width: 100%;
	cursor: pointer;
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
	// Use context
	const [quantity, setQuantity] = useState(1);
	const total = Math.round((props.unitPrice * quantity+ Number.EPSILON)* 100)/100;
	// const handleQuantityChange = (newQuantity: number) => {
	// 	setQuantity(newQuantity);
	// };
	const navigate = useNavigate();
	const productPage = (prodName: string) => {
		navigate({
			pathname: '/item',
			search: `?${createSearchParams({title: prodName})}`,
		});
	};

	const perItem = () => {
		if (quantity > 1) {
			return (<p>(${props.unitPrice} each)</p>)
		}
	}
	

	return (
		<StyledProduct>
      <StyledProperty style = {{ width: '50%', justifyContent: 'left' }}>
        <StyledProperty style = {{ width: '13rem'}}>
            <StyledImage onClick={() => {productPage(props.title)}} src={props.image} alt=""/>
        </StyledProperty>
        <StyledProperty style = {{ justifyContent: 'left' }}> 
          <StyledText>
            <StyledTitle onClick={() => {productPage(props.title)}} style = {{cursor: 'pointer', fontWeight: 'bold'}}>{props.title}</StyledTitle>
            <StyledInfo>
              <br/>
            </StyledInfo>
            <StyledInfo>
              {/* <BoldText>Colour:</BoldText>  */}
				<ColourButtonCartPage/>
            </StyledInfo>
            <StyledInfo>
				<SizeButtonCartPage/>
              {/* <BoldText>Size:</BoldText> {2} */}
            </StyledInfo>
            <StyledInfo>
              {/* <BoldText>Unit Price:</BoldText> ${props.unitPrice} */}
            </StyledInfo>
          </StyledText>
        </StyledProperty>
      </StyledProperty>
			<StyledProperty style = {{width: '20%'}}> 
				<Quantity count={quantity} onCountChange={setQuantity} />
			</StyledProperty>
			<StyledProperty style = {{width: '10%'}}> 
				<StyledImage style = {{width: '28%'}}src={Bin} alt="Bin Item"/>
			</StyledProperty>
			<StyledProperty style = {{width: '20%', display: 'flex', flexDirection: 'column'}}>  
				<StyledTitle>${total}</StyledTitle>
				{perItem()}
			</StyledProperty>
		</StyledProduct>
	);
};

export default CartCard;

