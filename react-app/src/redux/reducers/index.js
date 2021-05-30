import { combineReducers } from "redux";
import products from "./products.reducer";
import formAdminState from "./formAdminState.reducer";
import buys from "./buys.reducer";
import signin from "./signin.reducer";
import modals from "./modals.reducer";

const rootReducer = combineReducers({
  products: products,
  formAdminState: formAdminState,
  buys: buys,
  signin: signin,
  modals: modals,
});

export default rootReducer;
