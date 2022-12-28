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

const getShippingPriceSuccess = (shippingPrices) => {
  return {
    type: CartTypes.GET_SHIPPING_PRICE_SUCCESS,
    shippingPrices,
  };
};

const getShippingPriceError = (error) => {
  return {
    type: CartTypes.GET_SHIPPING_PRICE_FAIL,
    error,
  };
};

export const getShippingPrices = () => {
  return async (dispatch) => {
    try {
      dispatch(getShippingPriceStart());
      const httpResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(getShippingPriceSuccess(httpResponse.data));
    } catch (error) {
      dispatch(getShippingPriceError(error));
    }
  };
};
