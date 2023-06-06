import { combineReducers } from "redux";
import { productReducers } from "./productReducers";

export const allReducers = combineReducers({
  productReducers: productReducers,
});
