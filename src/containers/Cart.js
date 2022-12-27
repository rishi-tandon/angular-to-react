import Cart from '../components/Cart';
import React from 'react';
import { connect } from 'react-redux';

const CartContainer = (props) => {
  const { products } = props;
  return <Cart products={products}></Cart>;
};

const mapStateToProps = (state) => {
  return {
    products: state.cart.items,
  };
};

export default connect(mapStateToProps)(CartContainer);
