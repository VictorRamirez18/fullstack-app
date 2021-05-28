import { combineReducers } from "redux";
import products from "./products.reducer";
import formAdminState from "./formAdminState.reducer";

const rootReducer = combineReducers({
  products: products,
  formAdminState: formAdminState,
});

export default rootReducer;
