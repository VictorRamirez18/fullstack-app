import * as type from "../types";

export function BuyProduct(product) {
  return {
    type: type.BUY_PRODUCT_REQUESTED,
    payload: product,
  };
}
