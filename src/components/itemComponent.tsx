import React from 'react';

const ItemDescription = ({ productName, price, description }) => {
  return (
    <div>
      <h1>{productName}</h1>
      <h2>Price: ${price}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ItemDescription;

const SingleItemPage = () => {
  const productName = "Limited Edition Plush";
  const price = "$24.50";
  const description = "If you love baking cookies, eating almond pound cake and cuddling with cute animals, you will adore this sanrio my melody plush.";

  return (
    <div>
      <h1>Single Item Page</h1>
      <ItemDescription
        productName={productName}
        price={price}
        description={description}
      />
    </div>
  );
};

export default SingleItemPage;
