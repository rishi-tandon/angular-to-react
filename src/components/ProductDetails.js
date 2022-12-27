import React from 'react';
import { products } from '../products';
import { currency } from '../utils';

const ProductDetails = ({ match, addToCart }) => {
  const {
    params: { productId },
  } = match;
  const product = products[productId];

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <div>
        <h3>{product.name}</h3>
        <h2>{currency(product.price)}</h2>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Buy</button>
      </div>
    </div>
  );
};

export default ProductDetails;
