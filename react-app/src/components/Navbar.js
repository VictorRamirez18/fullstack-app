import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-500 flex-wrap py-2 px-0 flex justify-around">
      <Link to="/" className="w-3/12  flex justify-start">
        <img src="#" alt="logo" />
      </Link>
      <Menu />
      <Login />
    </div>
  );
}

const Menu = () => {
  return (
    <div className="w-4/12 flex flex-wrap justify-center gap-2">
      <Link to="/Admin">
        <p className="bg-blue-200 p-1">Admin</p>
      </Link>
      <Link to="/Buys">
        <p className="bg-blue-200 p-1">Buys</p>
      </Link>
    </div>
  );
};

const Login = () => {
  const [hidden, setHidden] = useState(true);
  const flagLogin = false;

  const handleSignIn = () => {
    setHidden(true);
  };

  return (
    <div
      className="w-3/12 flex flex-col flex-wrap items-center gap-2 relative "
      onClick={() => (hidden ? setHidden(false) : null)}
      id="loginContainer"
    >
      <img src="#" alt="avatarUser" id="avatarUser" />
      {!flagLogin && (
        <div
          className={`bg-gray-700 text-white flex flex-col gap-2 items-center p-2 w-full absolute ${
            hidden ? "hidden" : ""
          }`}
        >
          <img src="#" alt="avatarUser" />
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button className="bg-blue-200 p-1 text-black" onClick={handleSignIn}>
            Signin
          </button>
        </div>
      )}
      {flagLogin && (
        <div
          className={`bg-gray-400 flex flex-col gap-2 items-center p-2  w-full absolute ${
            hidden ? "hidden" : ""
          }`}
        >
          <img src="#" alt="avatarUser" />
          <p>Username</p>
          <button className="bg-blue-200 p-1">Close Session</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
