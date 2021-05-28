import * as type from "../types";

const initialState = {
  product: {},
  editing: false,
};

export default function formAdminState(state = initialState, action) {
  switch (action.type) {
    case type.PUT_FORM_ADMIN_STATE:
      return {
        ...state,
        product: action.payload,
        editing: action.editing,
      };
    case type.FORM_ADMIN_EDITING_STATE:
      return {
        ...state,
        editing: action.editing,
      };
    default:
      return state;
  }
}
