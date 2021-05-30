import { call, put, takeEvery } from "redux-saga/effects";

let apiUrl = "";

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

function* fetchProduct(action) {
  const id = action.payload;
  apiUrl = `http://localhost:3001/api/v1/products/${id}`;

  try {
    const product = yield call(getApi);
    yield put({ type: "GET_PRODUCT_SUCCESS", product: product });
  } catch (e) {
    yield put({
      type: "GET_PRODUCT_FAILED",
      message: e.message,
      code: 404,
    });
  }
}

function* getProduct() {
  yield takeEvery("GET_PRODUCT_REQUESTED", fetchProduct);
}

export default getProduct;
