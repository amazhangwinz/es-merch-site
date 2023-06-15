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
  width: 30vw;
  border-radius: 10px;
  background: #FBF9F9;
  margin: 1.75vw;
  box-shadow: 3px 5px silver
`;

const StyledContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  box-sizing: border-box;
  align-items:flex-start
`;

const StyledImage = styled.img`
  height: 100%;
  width: auto;
  max-width: 33%;
  border-radius:  0 10px 10px 0;
`;

const StyledPrice = styled.p`
  margin-bottom: 0;
`;

const StyledColours = styled.p`
  margin-bottom: 0;
`;

const ItemCard = (props: Prop) => {
  const navigate = useNavigate();
  const productPage = () => {
    navigate('/product');
  };

  return (
    <StyledComponent>
      <StyledContent>
        <h1 onClick={productPage} style={{margin:0, cursor: 'pointer'}}>{props.title}</h1>
        <p style={{margin:0}}>{props.description}</p>
        <StyledPrice style={{margin:0}}>{props.price}</StyledPrice>
        <StyledColours style={{margin:0}}>{props.colours.join(', ')}</StyledColours>
      </StyledContent>
      <StyledImage src={props.image} alt='' />
    </StyledComponent>
  );
};


export default ItemCard