import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "http://localhost:3001/api/v1/products";
let product = {};
let token = null;

function getApi() {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchProduct(action) {
  product = action.payload;
  token = action.token;

  try {
    const product = yield call(getApi);
    if (product.code !== 201)
      yield put({
        type: "POST_PRODUCTS_FAILED",
        code: product.code,
        message: product.message,
      });
    else yield put({ type: "POST_PRODUCTS_SUCCESS", product: product });
  } catch (e) {
    yield put({ type: "POST_PRODUCTS_FAILED", code: 420, message: e.message });
  }
}

function* postProduct() {
  yield takeEvery("POST_PRODUCTS_REQUESTED", fetchProduct);
}

export default postProduct;
