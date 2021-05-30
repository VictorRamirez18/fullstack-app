import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import AlertLogin from "./AlertLogin";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { clearState } from "../redux/actions/products.action";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const dispatch = useDispatch();
  const [hiddenOptions, setHiddenOptions] = useState("hidden");

  const toogleHiddenOptions = () => {
    setHiddenOptions(hiddenOptions === "hidden" ? "" : "hidden");
  };

  const handleBackHome = async () => {
    await dispatch(clearState());
  };
  return (
    <div className="sticky top-0 w-full bg-blue-700 h-auto lg:h-16 flex flex-wrap p-4 lg:py-2 lg:px-4 justify-between lg:justify-around gap-4 lg:gap-0 items-center">
      <Link
        to="/"
        className="w-3/12 flex justify-start"
        onClick={handleBackHome}
      >
        <h1 className="text-blue-200 uppercase text-2xl font-medium">
          Electrom
        </h1>
      </Link>
      <BotonHamburguer toogleHiddenOptions={toogleHiddenOptions} />
      <Menu hiddenOptions={hiddenOptions} />
      <Login hiddenOptions={hiddenOptions} />
      <Modal />
      <AlertLogin />
    </div>
  );
}

const Menu = ({ hiddenOptions }) => {
  const location = useLocation();
  const logged = useSelector((state) => state.signin.logged);
  const borderBottom = "border-b border-white";
  return (
    <div
      className={`w-full lg:w-4/12 flex ${hiddenOptions} lg:flex flex-wrap justify-center gap-12`}
    >
      <Link to="/">
        <p
          className={`p-1 text-md text-white ${
            location.pathname === "/" ? borderBottom : ""
          }`}
        >
          Home
        </p>
      </Link>

      {logged && (
        <Link to="/Admin">
          <p
            className={`p-1 text-md text-white ${
              location.pathname === "/Admin" ? borderBottom : ""
            }`}
          >
            Admin
          </p>
        </Link>
      )}

      {logged && (
        <Link to="/Buys">
          <p
            className={`p-1 text-md text-white ${
              location.pathname === "/Buys" ? borderBottom : ""
            }`}
          >
            Buys
          </p>
        </Link>
      )}
    </div>
  );
};

const BotonHamburguer = ({ toogleHiddenOptions }) => {
  return (
    <button type="button" aria-label="Menu" className="lg:hidden">
      <AiOutlineMenu
        // size={23}
        className="text-white text-2xl w-auto"
        onClick={toogleHiddenOptions}
      />
    </button>
  );
};
export default Navbar;
