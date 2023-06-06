import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_PRODUCT,
} from "../actions/productActionsTypes";

const initialState = {
  products: [],
};

export const productReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
