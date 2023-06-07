import { combineReducers } from "redux";
import { productReducers, selectedProductReducer } from "./productReducers";

export const allReducers = combineReducers({
  productReducers: productReducers,
  selectedProductReducer: selectedProductReducer,
});
