import types from '../action-types/cart';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_TO_CART: {
      const { product } = action;
      const { items } = state;

      window.alert('Your product has been added to the cart!');
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

    default:
      return state;
  }
}
