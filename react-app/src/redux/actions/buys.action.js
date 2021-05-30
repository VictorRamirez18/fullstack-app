import * as type from "../types";

export function getBuys() {
  return {
    type: type.GET_BUYS_REQUESTED,
  };
}

export function buyProduct(buy) {
  return {
    type: type.POST_BUY_REQUESTED,
    payload: buy,
  };
}

export function toogleBuyed(boolean) {
  return {
    type: type.TOOGLE_BUYED,
    payload: boolean,
  };
}
