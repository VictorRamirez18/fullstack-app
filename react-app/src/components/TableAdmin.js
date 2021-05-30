import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { putFormAdminState } from "../redux/actions/formAdminState.action";
import { deleteProduct, getProducts } from "../redux/actions/products.action";
import {
  productModalDelete,
  toogleModal,
} from "../redux/actions/modals.action";

function TableAdmin() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  useEffect(() => {
    if (products.length === 0) dispatch(getProducts());
  }, [dispatch]);

  return (
    <table className="table-auto w-full border-collapse text-center">
      <thead>
        <tr>
          <th className="border border-black">Id</th>
          <th className="border border-black">Product</th>
          <th className="border border-black">Brand</th>
          <th className="border border-black">Price</th>
          <th className="border border-black">Stock</th>
          <th className="border border-black">Url Image</th>
          <th className="border border-black">Actions</th>
        </tr>
      </thead>
      <tbody>
        {!loading &&
          products.length > 0 &&
          products.map((product) => {
            return <RowProduct product={product} key={product.id} />;
          })}
      </tbody>
    </table>
  );
}

const RowProduct = ({ product }) => {
  const formAdminState = useSelector((state) => state.formAdminState.product);
  const editingRedux = useSelector((state) => state.formAdminState.editing);

  const testId = () => {
    if (product.id === formAdminState.id) return editingRedux;
  };

  const [editing, setEditing] = useState(editingRedux ? testId() : false);

  const dispatch = useDispatch();

  const editProduct = (product) => {
    dispatch(putFormAdminState(product, !editing));
    setEditing(editing ? false : true);
  };

  const deletedProduct = () => {
    dispatch(productModalDelete(product));
    dispatch(toogleModal(true));
  };
  return (
    <tr>
      <td className="border border-black">{product.id}</td>
      <td className="border border-black">{product.name}</td>
      <td className="border border-black">{product.brand}</td>
      <td className="border border-black">{product.price}</td>
      <td className="border border-black">{product.stock}</td>
      <td className="border border-black">{product.image}</td>
      <td className="border border-black">
        <div className="flex justify-around">
          <button
            className={`text-2xl ${editing ? "bg-green-400" : ""}`}
            onClick={() => editProduct(product)}
          >
            <MdModeEdit />
          </button>
          <button className="text-2xl" onClick={deletedProduct}>
            <MdDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableAdmin;
