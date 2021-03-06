import * as type from "../types";

const initialState = {
  buys: [],
  loading: false,
  message: null,
  code: 0,
  error: null,
  buyed: false,
  previousError: null,
};

export default function buyProduct(state = initialState, action) {
  switch (action.type) {
    //post buy
    case type.GET_BUYS_REQUESTED:
      return {
        ...state,
        loading: true,
        message: null,
        code: 0,
        error: null,
      };
    case type.GET_BUYS_SUCCESS:
      return {
        ...state,
        loading: false,
        buys: action.buys.data,
        code: action.buys.code,
        message: action.buys.message,
        error: null,
        // buyed: true,
      };
    case type.GET_BUYS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.buy.message,
        code: action.code,
      };

    //post buy
    case type.POST_BUY_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
        code: 0,
      };
    case type.POST_BUY_SUCCESS:
      state.buys.push(action.buy.data);
      return {
        ...state,
        loading: false,
        code: action.buy.code,
        message: action.buy.message,
        error: null,
        buyed: true,
      };
    case type.POST_BUY_FAILED:
      if (action.error === "jwt malformed") {
        action.error = "You need to login to buy some product";
      }
      return {
        ...state,
        loading: false,
        code: action.code,
        error: action.error,
      };
    //Toogle buyed
    case type.TOOGLE_BUYED:
      return {
        ...state,
        buyed: action.payload,
        message: null,
        code: 0,
      };
    //Set previous error
    case type.SET_PREVIOUS_ERROR:
      return {
        ...state,
        previousError: action.payload,
      };

    //Clear messages buys
    case type.CLEAR_MESSAGES_BUYS:
      return {
        ...state,
        error: null,
        message: null,
        code: 0,
        previousError: null,
      };

    default:
      return state;
  }
}
