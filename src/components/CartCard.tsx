import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, createSearchParams } from 'react-router-dom';
import QuantitySelector from '../components/QuanitySelector';
// import Quantity from './archive/Quantity';
// import ColourButtonCartPage from './archive/ColourButtonCartPage';
// import SizeButtonCartPage from './archive/SizeButtonCartPage';
// import SizeSelector from '../components/SizeSelector';
// import { cartContext } from '../App';
import { Box, Typography } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CartRemovalModal from './CartRemovalModal';

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

const StyledProduct = {
	display: { md: "flex", xs: "none" },
	height: "13rem",
	width: "75rem",
	// background: #fbf9f9;
	marginBottom: "2rem",
	minWidth: { md: "none", xs: "370px" },
	// border: 1px solid black;
}
	;

const StyledProperty = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	// border: 1px solid black
`;

const StyledImage = {
	width: "100%",
	cursor: "pointer",

	// border-radius: 1rem
}
	;
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
	// const [size, setSize] = useState(props.size);
	// const { cart, setCart } = React.useContext(cartContext);

	const navigate = useNavigate();
	const productPage = (prodName: string) => {
		navigate({
			pathname: '/item',
			search: `?${createSearchParams({ title: prodName })}`,
		});
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
	};

	const perItem = () => {
		if (quantity > 1) {
			return (<Typography sx={{
				color: "#1C3A59",
				fontFamily: "Montserrat",
				fontSize: "1.2rem",
				fontStyle: "normal",
				fontWeight: "500",
				lineHeight: "normal",
			}}>(${props.unitPrice} each)</Typography>)
		}
	}

	// If user changes QUANTITY
	const handleChangeQuantity = () => {
		if (quantity !== props.qty) {
			props.onQuantityChange(quantity);
			return (<Typography sx={{ margin: "none" }}>(changed quantity)</Typography>)
		}
	}

	// If user changes SIZE
	/* const handleChangeSize = () => {
		if (size !== props.size) {
			props.onSizeChange(size);
			return (<Typography sx={{ margin: "none" }}>(changed size)</Typography>)
		}
	} */


	return (
		<>
			<Box sx={StyledProduct}>
				<StyledProperty style={{ width: '50%', justifyContent: 'left' }}>
					<StyledProperty style={{ width: '13rem' }}>
						<LazyLoadImage style={StyledImage} onClick={() => { productPage(props.title) }} src={props.image} alt="" />
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
								{/* <SizeSelector size={size} setSize={setSize} />
								{handleChangeSize()} */}
								{/* <SizeButtonCartPage /> */}
								{/* <BoldText>Size:</BoldText> {2} */}
								<Typography sx={{
									color: "#1C3A59",
									fontFamily: "Montserrat",
									fontSize: "1rem",
									fontStyle: "normal",
									fontWeight: "600",
									lineHeight: "normal",
									mb: 3,
								}}>{props.size}</Typography>
							</StyledInfo>
						</StyledText>
					</StyledProperty>
				</StyledProperty>
				<StyledProperty style={{ width: '20%' }}>
					{/* <Quantity count={quantity} onCountChange={setQuantity} /> */}
					<QuantitySelector size='medium' width={80} qty={quantity} setQty={setQuantity}></QuantitySelector>
					{handleChangeQuantity()}
				</StyledProperty>
				<StyledProperty style={{ width: '10%' }}>
					{/**MUI ALSO HAS ICON BUTTONS, ALSO REMEMBER THE SIDE EFFECT CHANGES USE CONTEXT TOO */}
					<CartRemovalModal title={props.title} image={props.image} unitPrice={props.unitPrice} qty={props.qty} size={props.size} />
				</StyledProperty>

				<StyledProperty style={{ width: '20%', display: 'flex', flexDirection: 'column' }}>
					<StyledTitle>${props.total}</StyledTitle>
					{perItem()}
				</StyledProperty>
			</Box>
			<Box sx={{ display: { md: "none", xs: "flex", borderTop: "1px solid #d9d9d9", maxWidth: "370px" } }}>
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<Box sx={{ display: "flex", alignContent: "start" }}>
						<Box sx={{ margin: ".5rem", flexGrow: 1 }}>
							<LazyLoadImage style={{ height: "8rem" }} onClick={() => { productPage(props.title) }} src={props.image} alt="" />
						</Box>
						<Box sx={{ justifyContent: "center", margin: ".5rem", flexGrow: 2, alignContent: "center" }}>
							<Typography onClick={() => { productPage(props.title) }} sx={{
								cursor: 'pointer',
								color: "#1C3A59",
								fontFamily: "Montserrat",
								fontSize: "1.7rem",
								fontStyle: "normal",
								fontWeight: "800",
								lineHeight: "normal",
								mb: 1,
							}}>{props.title}</Typography>
							<Typography sx={{
								color: "#1C3A59",
								fontFamily: "Montserrat",
								fontSize: "1rem",
								fontStyle: "normal",
								fontWeight: "600",
								lineHeight: "normal",
								mb: 3,
							}}>{props.size}</Typography>
							<Box sx={{ display: "flex", justifyContent: "space-around" }}>
								<QuantitySelector size='small' width={10} qty={quantity} setQty={setQuantity}></QuantitySelector>
								{handleChangeQuantity()}
								<CartRemovalModal title={props.title} image={props.image} unitPrice={props.unitPrice} qty={props.qty} size={props.size} />
							</Box>
						</Box>
					</Box>
					<Box sx={{ display: "flex", justifyContent: "space-around", m: 1, alignContent: "center", borderTop: "1.5px solid #d9d9d9", paddingTop: '1px' }}>

						<Typography sx={{
							color: "#1C3A59",
							fontFamily: "Montserrat",
							fontSize: "1.3rem",
							fontStyle: "normal",
							fontWeight: "800",
							lineHeight: "normal",

						}}> ${props.total}</Typography>
						{perItem()}
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default CartCard;

