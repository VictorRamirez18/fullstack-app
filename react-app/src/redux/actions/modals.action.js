import * as type from "../types";

export function toogleModal(boolean) {
  return {
    type: type.TOOGLE_MODAL,
    payload: boolean,
  };
}

export function productModalDelete(product) {
  return {
    type: type.PRODUCT_MODAL_DELETE,
    payload: product,
  };
}
