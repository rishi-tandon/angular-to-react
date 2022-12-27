import CartTypes from "../action-types/cart";
const axios = require("axios");

export const addToCart = (product) => {
  return {
    type: CartTypes.ADD_TO_CART,
    product,
  };
};

export const clearCart = () => {
  return {
    type: CartTypes.CLEAR_CART,
  };
};

const getShippingPriceStart = () => {
  return {
    type: CartTypes.GET_SHIPPING_PRICE_START,
  };
};

const getShippingPriceSuccess = () => {
  return {
    type: CartTypes.GET_SHIPPING_PRICE_SUCCESS,
    shippingPrices,
  };
};

const getShippingPriceError = () => {
  return {
    type: CartTypes.GET_SHIPPING_PRICE_FAIL,
  };
};
