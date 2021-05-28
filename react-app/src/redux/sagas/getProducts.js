import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "http://localhost:3001/api/v1/products";

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchProducts() {
  try {
    const products = yield call(getApi);
    yield put({ type: "GET_PRODUCTS_SUCCESS", products: products });
  } catch (e) {
    yield put({ type: "GET_PRODUCTS_FAILED", message: e.message });
  }
}

function* getProducts() {
  yield takeEvery("GET_PRODUCTS_REQUESTED", fetchProducts);
}

export default getProducts;
