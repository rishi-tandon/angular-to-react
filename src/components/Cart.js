import { Link } from 'react-router-dom';
import React from 'react';
import { currency } from '../utils';

const Cart = ({ products }) => {
  return (
    <div className="app-cart">
      <p>
        <Link to="/shipping">Shipping Prices</Link>
      </p>
      <h3>Cart</h3>
      {products.map((product) => {
        <div key="{product.name}" className="cart-item">
          <span>{product.name}</span>
          <span>{currency(product.price)}</span>
        </div>;
      })}
    </div>
  );
};

export default Cart;
