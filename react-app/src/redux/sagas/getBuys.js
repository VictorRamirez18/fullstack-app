import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "http://localhost:3001/api/v1/buys";

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

function* fetchBuys() {
  try {
    const buys = yield call(getApi);
    yield put({ type: "GET_BUYS_SUCCESS", buys: buys });
  } catch (e) {
    yield put({ type: "GET_BUYS_FAILED", message: e.message });
  }
}

function* getBuys() {
  yield takeEvery("GET_BUYS_REQUESTED", fetchBuys);
}

export default getBuys;
