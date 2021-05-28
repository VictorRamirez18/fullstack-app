import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Spinner() {
  return (
    <div className="flex justify-around gap-2 w-1/12 p-2 mx-auto my-4">
      <span>Loading</span>
      <AiOutlineLoading3Quarters className="animate-spin" />
    </div>
  );
}

export default Spinner;
