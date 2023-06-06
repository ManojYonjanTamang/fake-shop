import {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_PRODUCT,
} from "./productActionsTypes";

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

// export const selectedProduct = (product) => {
//   return {
//     type: SELECTED_PRODUCT,
//     payload: product,
//   };
// };

// export const removeProduct = (product) => {
//   return {
//     type: REMOVE_PRODUCT,
//     payload: product,
//   };
// };
