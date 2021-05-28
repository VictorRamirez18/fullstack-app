import * as type from "../types";

const initialState = {
  products: [],
  loading: false,
  error: null,
  message: null,
  code: 0,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    //Get products
    case type.GET_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.products.data,
        code: action.products.code,
        message: action.products.message,
        error: null,
      };
    case type.GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        code: action.products.code,
        error: action.message,
      };

    //Post product
    case type.POST_PRODUCTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.POST_PRODUCTS_SUCCESS:
      state.products.push(action.product.data);
      return {
        ...state,
        loading: false,
        message: action.product.message,
        code: action.product.code,
        error: null,
      };
    case type.POST_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
        code: action.code,
      };

    //Put product
    case type.PUT_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.PUT_PRODUCT_SUCCESS:
      const id = action.product.data.id;
      let updatingProduct = state.products.find((prop) => prop.id === id);
      for (let i in updatingProduct) {
        updatingProduct[i] = action.product.data[i];
      }
      return {
        ...state,
        loading: false,
        message: action.product.message,
        code: action.product.code,
        error: null,
      };
    case type.PUT_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
        code: action.code,
      };

    //Delete product
    case type.DELETE_PRODUCT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_PRODUCT_SUCCESS:
      console.log(action);
      const deletedProduct = action.product.data;
      const productsFiltered = state.products.filter(
        (i) => i.id !== deletedProduct.id
      );
      console.log(productsFiltered);
      return {
        ...state,
        loading: false,
        products: productsFiltered,
        message: action.product.message,
        code: action.product.code,
        error: null,
      };
    case type.DELETE_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        code: action.code,
        error: action.message,
      };

    default:
      return state;
  }
}
