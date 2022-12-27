import React from 'react';
import { connect } from 'react-redux';

import ProductDetailsComponent from '../components/ProductDetails';

import * as actions from '../store/action/cart';

const ProductDetails = (props) => {
  const { productId, addToCart, match } = props;

  return (
    <ProductDetailsComponent
      productId={productId}
      addToCart={addToCart}
      match={match}
      {...props}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(actions.addToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
