import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
// import AlertLogin from "./AlertLogin";
import Modal from "./Modal";

function Navbar() {
  return (
    <div className="bg-gray-500 flex-wrap items-center py-2 px-0 flex justify-around h-16">
      <Link to="/" className="w-3/12  flex justify-start">
        <img src="#" alt="logo" />
      </Link>
      <Menu />
      <Login />
      <Modal />
      {/* <AlertLogin /> */}
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

export default Navbar;
