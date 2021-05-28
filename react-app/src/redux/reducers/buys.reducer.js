import * as type from "../types";

const initialState = {
  id: 0,
  name: "",
  brand: "",
  price: 0,
  stock: 0,
  amount: 0,
  total: 0,
};

export default function buyProduct(state = initialState, action) {
  switch (action.type) {
    case type.BUY_PRODUCT_REQUESTED:
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
}
