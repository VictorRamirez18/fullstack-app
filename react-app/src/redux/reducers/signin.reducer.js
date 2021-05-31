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
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJEb2UiLCJlbWFpbCI6IkpvaG5Eb2VAZ21haWwuY29tIiwiaW1hZ2UiOiJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibjpBTmQ5R2NUUHlHTnIycUw2M1NmdWdrMloxLUtCRXdNR09meWNCcmliZXcmdXNxcD1DQVUiLCJwYXNzd29yZCI6ImNreiIsImNyZWF0ZWRBdCI6IjIwMjEtMDUtMzBUMjI6MjI6MjAuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDUtMzBUMjI6MjI6MjAuMDAwWiJ9LCJpYXQiOjE2MjI0Mzc5MzcsImV4cCI6MTYyMjUyNDMzN30.oPaSdEr-dmFMZxKyC_ts-ciL5pPQV27K2cGGLnp4Cow",
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
