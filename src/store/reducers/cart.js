import types from "../action-types/cart";

const initialState = {
  items: [],
  shippingPrices: [],
  shippingPricesLoading: false,
  shippingPricesError: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const { product } = action;
      const { items } = state;

      window.alert("Your product has been added to the cart!");
      return {
        ...state,
        items: [...items, product],
      };
    }

    case types.CLEAR_CART: {
      return {
        ...state,
        items: [],
      };
    }

    case types.GET_SHIPPING_PRICE_START: {
      return {
        ...state,
        shippingPrices: [],
        shippingPricesLoading: true,
        shippingPricesError: {},
      };
    }

    case types.GET_SHIPPING_PRICE_SUCCESS: {
      const { shippingPrices } = action;
      return {
        ...state,
        shippingPrices,
        shippingPricesLoading: false,
      };
    }

    case types.GET_SHIPPING_PRICE_FAIL: {
      const { error } = action;
      return {
        ...state,
        shippingPricesError: error,
        shippingPricesLoading: false,
      };
    }

    default:
      return state;
  }
}
