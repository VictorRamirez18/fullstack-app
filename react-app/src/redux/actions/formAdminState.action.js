import * as type from "../types";

export function putFormAdminState(product, editing) {
  return {
    type: type.PUT_FORM_ADMIN_STATE,
    payload: product,
    editing: editing,
  };
}

export function editStateEditingFormAdmin(editing) {
  return {
    type: type.FORM_ADMIN_EDITING_STATE,
    editing: editing,
  };
}
