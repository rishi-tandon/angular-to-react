import * as actions from "../store/action/cart";

import React from "react";
import ShippingPrices from "../components/ShippingPrices";
import { connect } from "react-redux";

const ShippingPricesContainer = (props) => {
  const { prices, getShippingPrices, loading } = props;
  return (
    <ShippingPrices
      prices={prices}
      getShippingPrices={getShippingPrices}
    ></ShippingPrices>
  );
};

const mapStateToProps = (state) => {
  return {
    prices: state.cart.shippingPrices,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShippingPrices: () => dispatch(actions.getShippingPrices()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShippingPricesContainer);
