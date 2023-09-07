import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, createSearchParams } from 'react-router-dom';
import Bin from '../assets/Bin.png'
import QuantitySelector from '../components/QuanitySelector';
// import Quantity from './archive/Quantity';
// import ColourButtonCartPage from './archive/ColourButtonCartPage';
// import SizeButtonCartPage from './archive/SizeButtonCartPage';
import SizeSelector from '../components/SizeSelector';
import { cartContext } from '../App';



interface Prop {
	image: string;
	title: string;
	unitPrice: number;
	index: number;
	qty: number;
	onQuantityChange: (newQuantity: number) => void;
	// colour: string;
	size: string;
	onSizeChange: (newSize: string) => void; // Define a callback prop
	total: number
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

// const BoldText = styled.span`
//   font-weight: bold;
// `;

const CartCard = (props: Prop) => {
	// Use context TO DETERMINE OG VAL, NOT JUST 1
	const [quantity, setQuantity] = useState(props.qty);
	// const total = Math.round((props.unitPrice * quantity + Number.EPSILON) * 100) / 100;
	const [size, setSize] = useState(props.size);

	const { cart, setCart } = React.useContext(cartContext);


	const deleteCard = (value: String) => {

		setCart(cart.filter((CartItem) => CartItem.name !== value));

		console.log("meow");
		console.log(cart);
	}

	const navigate = useNavigate();
	const productPage = (prodName: string) => {
		navigate({
			pathname: '/item',
			search: `?${createSearchParams({ title: prodName })}`,
		});
	};

	const perItem = () => {
		if (quantity > 1) {
			return (<p>(${props.unitPrice} each)</p>)
		}
	}

	// If user changes QUANTITY
	const handleChangeQuantity = () => {
		if (quantity !== props.qty) {
			props.onQuantityChange(quantity);
			return (<p>(changed quantity)</p>)
		}
	}

	// If user changes SIZE
	const handleChangeSize = () => {
		if (size !== props.size) {
			props.onSizeChange(size);
			return (<p>(changed size)</p>)
		}
	}


	return (
		<StyledProduct>
			<StyledProperty style={{ width: '50%', justifyContent: 'left' }}>
				<StyledProperty style={{ width: '13rem' }}>
					<StyledImage onClick={() => { productPage(props.title) }} src={props.image} alt="" />
				</StyledProperty>
				<StyledProperty style={{ justifyContent: 'left' }}>
					<StyledText>
						<StyledTitle onClick={() => { productPage(props.title) }} style={{ cursor: 'pointer', fontWeight: 'bold' }}>{props.title}</StyledTitle>
						<StyledInfo>
							<br />
						</StyledInfo>
						{/* <StyledInfo>
							<BoldText>Colour:</BoldText>
							<ColourButtonCartPage />
						</StyledInfo> */}
						<StyledInfo>
							<SizeSelector size={size} setSize={setSize} />
							{handleChangeSize()}
							{/* <SizeButtonCartPage /> */}
							{/* <BoldText>Size:</BoldText> {2} */}
						</StyledInfo>
					</StyledText>
				</StyledProperty>
			</StyledProperty>
			<StyledProperty style={{ width: '20%' }}>
				{/* <Quantity count={quantity} onCountChange={setQuantity} /> */}
				<QuantitySelector qty={quantity} setQty={setQuantity}></QuantitySelector>
				{handleChangeQuantity()}
			</StyledProperty>
			<StyledProperty style={{ width: '10%' }}>
				{/**MUI ALSO HAS ICON BUTTONS, ALSO REMEMBER THE SIDE EFFECT CHANGES USE CONTEXT TOO */}
				<StyledImage onClick={() => { deleteCard(props.title) }} style={{ width: '28%' }} src={Bin} alt="Bin Item" />
			</StyledProperty>
			<StyledProperty style={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
				<StyledTitle>${props.total}</StyledTitle>
				{perItem()}
			</StyledProperty>
		</StyledProduct>
	);
};

export default CartCard;

