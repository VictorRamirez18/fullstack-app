import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { toogleAlreadySignIn } from "../redux/actions/signin.action";

function AlertLogin() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.signin.message);
  const code = useSelector((state) => state.signin.code);
  const error = useSelector((state) => state.signin.error);
  const loading = useSelector((state) => state.signin.loading);
  const alreadySignin = useSelector((state) => state.signin.alreadySignin);

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (alreadySignin) return false;
    if (!alreadySignin && !loading && message !== "" && code !== 0) {
      if (code === 200) dispatch(toogleAlreadySignIn(true));
      setHidden(false);
    }
  }, [dispatch, code, loading, message, alreadySignin]);

  //hide alert login if error and message are null
  useEffect(() => {
    if (error === null && message === null) setHidden(true);
  }, [error, message]);

  let testCodeSucces = [200, 201, 202].includes(code);

  return (
    <div className="w-full fixed bottom-5">
      <div
        className={`border ${
          testCodeSucces
            ? "bg-green-100 border-green-400 text-green-700"
            : "bg-red-100 border-red-400 text-red-700"
        } border px-4 py-3 rounded relative flex gap-2 ${
          hidden ? "hidden" : ""
        }`}
        role="alert"
        onClick={() => setHidden(true)}
      >
        <strong className="font-bold">
          {testCodeSucces ? "Success" : "Error"}
        </strong>
        <span className="block sm:inline">
          {testCodeSucces ? message : error}
        </span>
        <span
          className="absolute top-0 bottom-0 right-0 px-4 py-3 text-2xl"
          onClick={() => setHidden(true)}
        >
          <AiFillCloseCircle />
        </span>
      </div>
    </div>
  );
}

export default AlertLogin;
