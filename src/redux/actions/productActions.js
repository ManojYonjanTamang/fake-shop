import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_PREV_PRODUCT,
} from "./productActionsTypes";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removePrevProduct = () => {
  return {
    type: REMOVE_PREV_PRODUCT,
  };
};
