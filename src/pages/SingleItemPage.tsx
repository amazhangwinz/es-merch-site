import React from 'react';
import ImagePreview from "../components/ImagePreview"
import { useEffect, useState } from 'react';
import RelatedItems from '../components/RelatedItemBox';
import CheckoutModal from '../components/CheckoutModal';
import ColourSelector from '../components/ColourSelector';
import img from "../assets/EngsocLogo.svg";
import img1 from "../assets/728a14b7c377e3a51bf325b237c74de8.jpg";
import img2 from "../assets/lighter.webp"
import img3 from "../assets/pushin.gif"
import { CartItem, cartContext } from '../App';
import {
  Box,

} from '@mui/material';
import styled from "styled-components";

const ImagePreviewContainer = styled.div`
  display: flex;
  justify-content: center;
background: #ECECEC;
margin:5rem;
// border-style: dotted;
align-items: center;
`

const ImageDetailContainer = styled.div`
width: 32.3125rem;
height: 27.75rem;
flex-shrink: 0;
background: red;
display:flex;
justify-content: space-around;
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
  height: 20rem;
  align-items: center;
  text-align: center;


`


const SingleItemPage = () => {
  const { cart, setCart } = React.useContext(cartContext);

  return (
    <div>

      <ImagePreviewContainer>
        <ImagePreview itemColour={cart[0].color} />
        <ImageDetailContainer>
          <ColourSelector></ColourSelector>
          <CheckoutModal></CheckoutModal>
        </ImageDetailContainer>
      </ImagePreviewContainer>

      <RelatedItemsContainer>
        <h1>Here are some items you'll love</h1>
        <RelatedImageContainer>
          {cart.map((e) => <RelatedItems price={e.price} itemtext={e.name} img={img1}></RelatedItems>)}
          {/* <RelatedItems
            price={cart[0].price}
            itemtext={cart[0].name}
            img={img1} // to figure out
          />
          <RelatedItems
            price={cart[1].price}
            itemtext={cart[1].name}
            img={img1}
          />
          <RelatedItems
            price={12.60}
            itemtext="Doll"
            img={img1}
          /> */}
        </RelatedImageContainer>
      </RelatedItemsContainer>
    </div>


  )
}

export default SingleItemPage;
