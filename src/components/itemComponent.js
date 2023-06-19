import React from 'react';

const ItemDescription = ({ productName, price, description }) => {
  return (
    <div>
      <h2>{productName}</h2>
      <h3>Price: ${price}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ItemDescription;
