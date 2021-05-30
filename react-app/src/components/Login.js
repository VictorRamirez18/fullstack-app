import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleModal } from "../redux/actions/modals.action";
import { signIn } from "../redux/actions/signin.action";
import { FaUserCircle } from "react-icons/fa";
import { clearMessagesBuys } from "../redux/actions/buys.action";

function Login({ hiddenOptions }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.signin.user);

  const [hidden, setHidden] = useState(true);
  const [empty, setEmpty] = useState(false);
  // const hidden = useSelector((state) => state.signin.hiddenLogin);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logged = useSelector((state) => state.signin.logged);

  const handleSignIn = (event) => {
    event.preventDefault();
    if (!email && !password) {
      setEmpty(true);
      return false;
    }
    setEmpty(false);
    dispatch(signIn(email, password));
    dispatch(clearMessagesBuys());
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
      className={`w-full lg:w-3/12 h-auto lg:h-full flex lg:flex flex-col  flex-wrap items-center gap-2 lg:relative ${hiddenOptions}`}
      onClick={handleHiddenLogin}
      id="login"
    >
      {hidden && !logged && (
        <FaUserCircle
          id="avatarUser"
          className="h-12 lg:h-full w-full object-contain"
          onClick={() => setHidden(false)}
        />
      )}
      {logged && hidden && (
        <img
          src={user.image ? user.image : "#"}
          alt="avatarUser"
          id="avatarUser"
          className="h-12 lg:h-full rounded-full"
          onClick={() => setHidden(false)}
        />
      )}

      {!logged && (
        <form
          className={`border bg-blue-500 text-white flex flex-col gap-2 items-center p-2 w-full lg:absolute pb-4 ${
            hidden ? "hidden" : ""
          }`}
          id="login"
        >
          {!logged && (
            <FaUserCircle
              className="text-5xl lg:text-4xl"
              onClick={() => setHidden(true)}
            />
          )}
          {logged && <img src="#" alt="avatarUser" />}

          <label htmlFor="emailUser">Email</label>
          <input
            type="text"
            id="emailUser"
            value={email}
            onChange={handleChange}
            className="text-black w-full sm:w-6/12 lg:w-auto"
          />
          {empty && <p className="text-red-500 font-medium">Require a value</p>}

          <label htmlFor="passwordUser">Password</label>
          <input
            type="password"
            id="passwordUser"
            value={password}
            onChange={handleChange}
            className="text-black w-full sm:w-6/12 lg:w-auto"
          />
          {empty && <p className="text-red-500 font-medium">Require a value</p>}

          <button
            type="submit"
            className="bg-blue-200 rounded-md p-1 text-black font-medium"
            onClick={handleSignIn}
          >
            Signin
          </button>
        </form>
      )}

      {logged && (
        <div
          className={`bg-blue-500 flex flex-col gap-4 items-center p-2  w-full lg:absolute pb-4 ${
            hidden ? "hidden" : ""
          }`}
          id="login"
        >
          <img
            src={user.image ? user.image : "#"}
            alt="avatarUser"
            className="h-24"
            onClick={() => setHidden(true)}
          />
          <p className="capitalize text-white">{`${user.firstName} ${user.lastName}`}</p>
          <p className="text-white text-xl">{`${user.email}`}</p>
          <button
            className="bg-red-200 rounded-md p-1 font-medium"
            onClick={handleCloseSession}
          >
            Close Session
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
