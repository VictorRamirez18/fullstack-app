import * as type from "../types";

const initialState = {
  user: {},
  loading: false,
  error: null,
  message: null,
  logged: false,
  code: 0,
  hiddenLogin: true,
  token: null,
  alreadySignin: false,
};

export default function formAdminState(state = initialState, action) {
  switch (action.type) {
    case type.SIGNIN_REQUESTED:
      return {
        ...state,
        loading: true,
        message: null,
        error: null,
        token: null,
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
        // token: action.user.token,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdE5hbWUiOiJzdGV2ZSIsImxhc3ROYW1lIjoicm9nZXJzIiwiZW1haWwiOiJzdGV2ZUBnbWFpbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vd3AtbXByby1ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzAzLzE0MTMzOTU5L3MzLWJsb2ctdGVjbm9sb2dpYS1jb21vLXByaW9yaWRhZC1taW4ucG5nIiwicGFzc3dvcmQiOiJja3oiLCJjcmVhdGVkQXQiOiIyMDIxLTA1LTI5VDE4OjI2OjE1LjAwMFoiLCJ1cGRhdGVkQXQiOiIyMDIxLTA1LTI5VDE4OjI2OjE1LjAwMFoifSwiaWF0IjoxNjIyNDA4NDA0LCJleHAiOjE2MjI0OTQ4MDR9.xf_rmLJYx9z9zEvd9Cv3_ucrMMg--ok_MwM_S_A7qEg",
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

    case type.ALREADY_SIGNIN:
      return {
        ...state,
        alreadySignin: action.boolean,
      };

    default:
      return state;
  }
}
