import { call, put, takeEvery } from "redux-saga/effects";

let apiUrl = "";
let updateProduct = {
  id: "",
  name: "",
  brand: "",
  price: 0,
  stock: 0,
};
// let token = ""

function getApi() {
  return fetch(apiUrl, {
    method: "PUT",
    headers: {
      Authorization: "token",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateProduct),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchProduct(action) {
  let id = action.payload.id;
  for (let i in updateProduct) {
    updateProduct[i] = action.payload[i];
  }
  apiUrl = `http://localhost:3001/api/v1/products/${id}`;
  //   token = action.token;
  try {
    const product = yield call(getApi);
    if (product.code !== 202)
      yield put({
        type: "PUT_PRODUCT_FAILED",
        code: product.code,
        message: product.message,
      });
    else yield put({ type: "PUT_PRODUCT_SUCCESS", product: product });
  } catch (e) {
    yield put({ type: "PUT_PRODUCT_FAILED", code: 420, message: e.message });
  }
}

function* putProduct() {
  yield takeEvery("PUT_PRODUCT_REQUESTED", fetchProduct);
}

export default putProduct;
