import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toogleModalDelete } from "../redux/actions/modals.action";
import { deleteProduct } from "../redux/actions/products.action";
import { RiDeleteBin2Line } from "react-icons/ri";

function ModalDelete() {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modals.isOpenModalDelete);
  const token = useSelector((state) => state.signin.token);
  const productDeleting = useSelector(
    (state) => state.modals.productModalDelete
  );

  const handleCloseModal = () => {
    dispatch(toogleModalDelete(false));
  };

  const handleClick = (event) => {
    const { id } = event.target;
    if (id === "modal") {
      handleCloseModal();
    }
  };

  const handleAccept = () => {
    dispatch(deleteProduct(productDeleting, token));
    dispatch(toogleModalDelete(false));
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
        className="bg-white w-1/2 h-1/2 p-12 flex flex-col items-center gap-2 text-center justify-around"
        id="modal-content"
      >
        <RiDeleteBin2Line className="text-4xl animate-pulse" />
        <h2 className="text-2xl font-medium">
          Are you sure you want to delete this product?
        </h2>
        <div className="flex p-2 gap-2 justify-around  w-full my-4">
          <button
            className="bg-red-400 rounded-md font-medium text-white p-1 w-4/12"
            onClick={handleAccept}
          >
            Yes
          </button>
          <button
            className="bg-blue-400 rounded-md font-medium text-white p-1 w-4/12"
            onClick={handleCloseModal}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDelete;
