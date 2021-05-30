import * as type from "../types";
const user = {
  email: null,
  password: null,
};

export function signIn(email, password) {
  user.email = email;
  user.password = password;
  return {
    type: type.SIGNIN_REQUESTED,
    payload: user,
  };
}

export function signOut() {
  return {
    type: type.SIGNOUT,
  };
}
