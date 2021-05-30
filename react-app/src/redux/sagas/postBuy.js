import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "http://localhost:3001/api/v1/buys";
let newBuy = {};
// let token = ""

function getApi() {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: "token",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBuy),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchBuy(action) {
  newBuy = action.payload;
  //   token = action.token;

  try {
    const buy = yield call(getApi);
    if (buy.code !== 201)
      yield put({
        type: "POST_BUY_FAILED",
        code: buy.code,
        error: buy.message,
      });
    else yield put({ type: "POST_BUY_SUCCESS", buy: buy });
  } catch (e) {
    yield put({ type: "POST_BUY_FAILED", code: 420, message: e.message });
  }
}

function* postBuy() {
  yield takeEvery("POST_BUY_REQUESTED", fetchBuy);
}

export default postBuy;
