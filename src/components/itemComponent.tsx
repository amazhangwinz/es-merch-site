import React from 'react';

type Props = {
  productName: string;
  price: number;
  description: string;
}

const ItemDescription = ({productName, price, description} : Props) => {
  return (
    <div>
      <h1>{productName}</h1>
      <h2>Price: ${price}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ItemDescription;
