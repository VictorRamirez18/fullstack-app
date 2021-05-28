import { call, put, takeEvery } from "redux-saga/effects";

let apiUrl = "";
let productDeleting = {};

function getApi() {
  return fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: "Token tokenid",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: productDeleting,
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchProduct(action) {
  let id = action.payload.id;
  apiUrl = `http://localhost:3001/api/v1/products/delete/${id}`;
  productDeleting = JSON.stringify(action.payload);
  try {
    const product = yield call(getApi);
    yield put({ type: "DELETE_PRODUCT_SUCCESS", product: product });
  } catch (e) {
    yield put({ type: "DELETE_PRODUCT_FAILED", message: e });
  }
}

function* deleteRroduct() {
  yield takeEvery("DELETE_PRODUCT_REQUESTED", fetchProduct);
}

export default deleteRroduct;
