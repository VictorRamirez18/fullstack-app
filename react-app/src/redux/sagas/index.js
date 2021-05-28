import { all } from "redux-saga/effects";
import getProducts from "./getProducts";
import postProduct from "./postProduct";
import putProduct from "./putProduct";
import deleteProduct from "./deleteProduct";

export default function* rootSaga() {
  yield all([getProducts(), postProduct(), putProduct(), deleteProduct()]);
}
