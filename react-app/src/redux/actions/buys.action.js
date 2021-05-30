import * as type from "../types";

export function getBuys() {
  return {
    type: type.GET_BUYS_REQUESTED,
  };
}

export function buyProduct(buy, token) {
  return {
    type: type.POST_BUY_REQUESTED,
    payload: buy,
    token: token,
  };
}

export function toogleBuyed(boolean) {
  return {
    type: type.TOOGLE_BUYED,
    payload: boolean,
  };
}

export function setPreviousError(error) {
  return {
    type: type.SET_PREVIOUS_ERROR,
    payload: error,
  };
}

export function clearMessagesBuys() {
  return {
    type: type.CLEAR_MESSAGES_BUYS,
  };
}
