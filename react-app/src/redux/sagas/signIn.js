import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "http://localhost:3001/api/v1/users/signin";
let userSignin = {};
// let token = ""

function getApi() {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: "token",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userSignin),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchSignIn(action) {
  userSignin = action.payload;
  //   token = action.token;

  try {
    const user = yield call(getApi);
    if (user.code !== 200)
      yield put({
        type: "SIGNIN_FAILED",
        code: user.code,
        message: user.message,
      });
    else yield put({ type: "SIGNIN_SUCCESS", user: user });
  } catch (e) {
    yield put({ type: "SIGNIN_FAILED", code: 420, message: e.message });
  }
}

function* signIn() {
  yield takeEvery("SIGNIN_REQUESTED", fetchSignIn);
}

export default signIn;
