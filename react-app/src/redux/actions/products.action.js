import * as type from "../types";

export function getProducts() {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
  };
}

export function postProduct(product, token) {
  return {
    type: type.POST_PRODUCTS_REQUESTED,
    payload: product,
    token: token,
  };
}

// export function postProduct(product, token) {
//   return {
//     type: type.POST_PRODUCTS_REQUESTED,
//     payload: product,
//     token: token,
//   };
// }

export function putProduct(product, token) {
  return {
    type: type.PUT_PRODUCT_REQUESTED,
    payload: product,
    token: token,
  };
}

export function deleteProduct(product, token) {
  return {
    type: type.DELETE_PRODUCT_REQUESTED,
    payload: product,
    token: token,
  };
}

export function getProduct(id) {
  return {
    type: type.GET_PRODUCT_REQUESTED,
    payload: id,
  };
}

export function clearState() {
  return {
    type: type.CLEAR_STATE,
  };
}
