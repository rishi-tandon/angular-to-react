import * as actions from "../store/action/cart";

import CartComponent from "../components/Cart";
import React from "react";
import { connect } from "react-redux";

const Cart = (props) => {
  const { products, clearCart } = props;

  return (
    <CartComponent
      {...{
        clearCart,
        products,
      }}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.cart.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
