import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toogleModal } from "../redux/actions/modals.action";
import { signOut } from "../redux/actions/signin.action";
import { clearMessagesBuys } from "../redux/actions/buys.action";
import { FaSignOutAlt } from "react-icons/fa";

function Modal() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modals.isOpen);

  const handleCloseModal = () => {
    dispatch(toogleModal(false));
  };

  const handleClick = (event) => {
    const { id } = event.target;
    if (id === "modal") {
      handleCloseModal();
    }
  };

  const handleAccept = async () => {
    await dispatch(signOut());
    await dispatch(clearMessagesBuys());
    dispatch(toogleModal(false));
  };
  return (
    <div
      id="modal"
      className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-50 transform scale-${
        modal ? 100 : 0
      } transition-transform duration-300`}
      onClick={handleClick}
    >
      <div
        className="bg-white w-1/2 h-1/2 p-12 flex flex-col justify-around items-center gap-2"
        id="modal-content"
      >
        <FaSignOutAlt className="text-4xl animate-pulse" />
        <h2 className="text-2xl font-medium">
          Are you sure you want to signout?
        </h2>
        <div className="flex p-2 gap-2 justify-around  w-full my-4">
          <button
            className="bg-red-400 text-white rounded-md p-1 w-4/12"
            onClick={handleAccept}
          >
            Yes
          </button>
          <button
            className="bg-blue-400 text-white rounded-md p-1 w-4/12"
            onClick={handleCloseModal}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
