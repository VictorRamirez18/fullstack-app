import * as type from "../types";

const initialState = {
  user: {},
  loading: false,
  error: null,
  message: null,
  logged: false,
  code: 0,
  hiddenLogin: true,
  token: false,
};

export default function formAdminState(state = initialState, action) {
  switch (action.type) {
    case type.SIGNIN_REQUESTED:
      return {
        ...state,
        loading: true,
        message: null,
        error: null,
        token: false,
      };
    case type.SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: true,
        user: action.user.data,
        error: null,
        code: action.user.code,
        message: action.user.message,
        token: true,
      };
    case type.SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        code: action.code,
        message: null,
        error: action.message,
        token: false,
      };

    case type.SIGNOUT:
      return (state = initialState);

    default:
      return state;
  }
}
