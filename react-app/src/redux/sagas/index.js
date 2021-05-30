import { all } from "redux-saga/effects";
import getProducts from "./getProducts";
import postProduct from "./postProduct";
import putProduct from "./putProduct";
import deleteProduct from "./deleteProduct";
import getSingleProduct from "./getSingleProduct";
import getBuys from "./getBuys";
import postBuy from "./postBuy";
import signIn from "./signIn";

export default function* rootSaga() {
  yield all([
    getProducts(),
    postProduct(),
    putProduct(),
    deleteProduct(),
    getSingleProduct(),
    getBuys(),
    postBuy(),
    signIn(),
  ]);
}
