import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import { setPreviousError } from "../redux/actions/buys.action";

function AlertBuys() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.buys.message);
  const code = useSelector((state) => state.buys.code);
  const error = useSelector((state) => state.buys.error);
  const loading = useSelector((state) => state.buys.loading);
  const previousError = useSelector((state) => state.buys.previousError);

  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (error === previousError && message !== "Successful purchase") {
      return false;
    }
    const exceptions = ["All buys fetched successfully"];
    if (!loading && !exceptions.includes(message) && code !== 0) {
      setHidden(false);
      dispatch(setPreviousError(error));
    }
  }, [dispatch, code, loading, message, error, previousError]);

  useEffect(() => {
    if (!hidden) {
      setTimeout(() => {
        setHidden(true);
      }, 900);
    }
  }, [hidden]);

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

export default AlertBuys;
