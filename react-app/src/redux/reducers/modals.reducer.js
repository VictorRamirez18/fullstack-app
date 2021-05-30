import * as type from "../types";

const initialState = {
  isOpen: false,
  productModalDelete: {},
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case type.TOOGLE_MODAL:
      return {
        ...state,
        isOpen: action.payload,
      };
    case type.PRODUCT_MODAL_DELETE:
      return {
        ...state,
        productModalDelete: action.payload,
      };

    default:
      return state;
  }
}
