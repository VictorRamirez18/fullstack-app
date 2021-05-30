import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleModal } from "../redux/actions/modals.action";
import { signIn } from "../redux/actions/signin.action";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.signin.user);

  const [hidden, setHidden] = useState(true);
  // const hidden = useSelector((state) => state.signin.hiddenLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logged = useSelector((state) => state.signin.logged);

  const handleSignIn = () => {
    dispatch(signIn(email, password));
    // setHidden(true);
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    if (id === "emailUser") setEmail(value);
    if (id === "passwordUser") setPassword(value);
  };

  const handleCloseSession = async () => {
    dispatch(toogleModal(true));
  };

  const handleHiddenLogin = (event) => {
    const { id } = event.target;
    if (id === "login" || id === "avatarUser") setHidden(hidden ? false : true);
  };

  useEffect(() => {
    if (!logged) {
      setEmail("");
      setPassword("");
    }
  }, [logged]);

  return (
    <div
      className="w-2/12 h-full flex flex-col flex-wrap items-center gap-2 relative"
      onClick={handleHiddenLogin}
      id="login"
    >
      <img
        src={user.image ? user.image : "#"}
        alt="avatarUser"
        id="avatarUser"
        className="h-full rounded-full"
      />

      {!logged && (
        <div
          className={`bg-gray-700 text-white flex flex-col gap-2 items-center p-2 w-full absolute ${
            hidden ? "hidden" : ""
          }`}
          id="login"
        >
          <img src="#" alt="avatarUser" />

          <label htmlFor="emailUser">Email</label>
          <input
            type="text"
            id="emailUser"
            value={email}
            onChange={handleChange}
            className="text-black"
          />

          <label htmlFor="passwordUser">Password</label>
          <input
            type="password"
            id="passwordUser"
            value={password}
            onChange={handleChange}
            className="text-black"
          />

          <button className="bg-blue-200 p-1 text-black" onClick={handleSignIn}>
            Signin
          </button>
        </div>
      )}

      {logged && (
        <div
          className={`bg-green-400 flex flex-col gap-2 items-center p-2  w-full absolute ${
            hidden ? "hidden" : ""
          }`}
          id="login"
        >
          <img
            src={user.image ? user.image : "#"}
            alt="avatarUser"
            className="h-24"
          />
          <p>{`${user.firstName} ${user.lastName}`}</p>
          <p>{`${user.email}`}</p>
          <button className="bg-blue-200 p-1" onClick={handleCloseSession}>
            Close Session
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
