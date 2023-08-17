import React from 'react';
import ImagePreview from "../components/ImagePreview"
import RelatedItems from '../components/RelatedItemBox';
import CheckoutModal from '../components/CheckoutModal';
import ColourSelector from '../components/ColourSelector';
import QuantitySelector from '../components/QuanitySelector';
import img1 from "../assets/728a14b7c377e3a51bf325b237c74de8.jpg";
import {data} from "../Data.jsx"
import {  cartContext } from '../App';
import { useSearchParams } from 'react-router-dom';
import styled from "styled-components";
import {findItemObject} from '../Helpers.js';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import SizeButtonItemPage from '../components/SizeButtonItemPage';
import SizeGuideModal from '../components/SizeGuideModal';


const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #ECECEC;
  margin:5rem;
  // border-style: dotted;
  align-items: center;
`

const ImageDetailContainer = styled.div`
width: 32.3125rem;
height: 27.75rem;
flex-shrink: 0;
// background: red;
display:flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
`

const RelatedItemsContainer = styled.div`
  text-align: left;
  color: #1C3A59;
font-family: Montserrat;
font-size: 1.5rem;
font-style: normal;
font-weight: 800;
line-height: normal;
margin:5rem;
// border-style:dotted;
`
const RelatedImageContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  text-align: center;


`
const RelatedDetailsContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 25%;
padding: 1rem;
`

const SingleItemPage = () => {

  const { cart, setCart } = React.useContext(cartContext);
  const [queryString] = useSearchParams();
  // NAME
  const itemTitle = queryString.get('title');
  // CAN GET PRICE
  const itemObj = findItemObject(itemTitle);
  // SIZE
  const [size, setSize] = React.useState('Small');
  // COLOURS INDEX . NAME
  const [clickedButton, setClickedButton] = React.useState(0);
  const [heroSrc, setHero] = React.useState(itemObj.colours[0].img);
  // BRING QUANTITY USESTATE OUTSIDE OF COMPONENT
  const handleAddToCart = () => {

  }

  React.useEffect(() => {
    setHero(() => itemObj.colours[clickedButton].img);
  }, [clickedButton]);
  

  return (
    <>
      <ImagePreviewContainer>
        <ImagePreview itemName={itemTitle} heroSrc={heroSrc} setHero={setHero}/>
        <ImageDetailContainer>
          <Box>
          <Typography variant="h3" sx={{color: '#1C3A59'}} gutterBottom>
            {itemTitle}
          </Typography>
          <Typography variant="h6" gutterBottom sx={{color: '#1C3A59'}}>
            ${itemObj.price}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{color: '#1C3A59'}}>
            {itemObj.description}
          </Typography>
          <Box sx={{display: 'flex', flexDirection:'row', alignItems: 'center', mt: 3}}>
            <SizeButtonItemPage size={size} setSize={setSize}/>
            <SizeGuideModal/>
          </Box>
          </Box>
          <ColourSelector clickedButton={clickedButton} setClickedButton={setClickedButton} itemName={itemTitle}></ColourSelector>
          <Box sx={{display: 'flex', flexDirection:'row', alignItems: 'center'}}> <QuantitySelector></QuantitySelector>
            <CheckoutModal handleAddToCart={handleAddToCart}></CheckoutModal></Box>
        </ImageDetailContainer>
      </ImagePreviewContainer>
      <RelatedItemsContainer>
        <h1 style={{fontSize: 35, textAlign: 'center'}}>Here are some items you'll also love</h1>
        <RelatedImageContainer >
          {data.map((e) => {
            if (e.name !== itemTitle) {
              return (
                <RelatedItems price={e.price} itemtext={e.name} img={e.default}></RelatedItems>
          )}})}
        </RelatedImageContainer>
      </RelatedItemsContainer>
    </>
  )
}

export default SingleItemPage;
