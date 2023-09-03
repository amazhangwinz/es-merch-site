import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import EngsocLogo from '../assets/EngsocLogo.svg';
import styled from "styled-components";
import { CartItem, cartContext } from '../../App';

interface Props {
  cartItem: CartItem;
}

const CartItemComponent = (props: Props) => {
  const cartItem = props.cartItem;
  return (
    <div>
      <h3>{cartItem.name}</h3>
      <p>{cartItem.price}</p>
      <p>{cartItem.quantity}</p>
    </div>
  )
};

const ExampleUseContext = () => {
  const { cart, setCart } = React.useContext(cartContext);
  // For each item in our cart, return an component with the item's information
  return (
    <div>
      {cart.map((cartItem: CartItem) => (<CartItemComponent cartItem={cartItem} />))}
    </div>
  )
}

export default ExampleUseContext;
