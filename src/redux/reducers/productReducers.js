import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_PREV_PRODUCT,
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

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...state, ...payload };
    case REMOVE_PREV_PRODUCT:
      return {};
    default:
      return state;
  }
};
