import * as type from "../types";

export function getProducts() {
  return {
    type: type.GET_PRODUCTS_REQUESTED,
  };
}

export function postProduct(product) {
  return {
    type: type.POST_PRODUCTS_REQUESTED,
    payload: product,
  };
}

// export function postProduct(product, token) {
//   return {
//     type: type.POST_PRODUCTS_REQUESTED,
//     payload: product,
//     token: token,
//   };
// }

export function putProduct(product) {
  return {
    type: type.PUT_PRODUCT_REQUESTED,
    payload: product,
  };
}

export function deleteProduct(product) {
  return {
    type: type.DELETE_PRODUCT_REQUESTED,
    payload: product,
  };
}

export function getProduct(id) {
  return {
    type: type.GET_PRODUCT_REQUESTED,
    payload: id,
  };
}
