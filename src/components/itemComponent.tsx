import React from 'react';

type Props = {
  productName: string;
  price: number;
  description: string;
}

const ItemDescription = ({productName, price, description} : Props) => {
  return (
    <div>
      <h1><b>{productName}</b></h1>
      <h2><b>Price: ${price}</b></h2>
      <p>{description}</p>
    </div>
  );
};

export default ItemDescription;
