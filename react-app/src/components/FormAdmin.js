import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postProduct, putProduct } from "../redux/actions/products.action";
import { editStateEditingFormAdmin } from "../redux/actions/formAdminState.action";

const initialState = {
  id: 0,
  name: "Laptop",
  brand: "Lorem",
  price: 12,
  stock: 12,
  image: "https://revistaitnow.com/wp-content/uploads/2020/12/1.jpeg",
};

function FormularioAdmin() {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState(initialState);
  const editing = useSelector((state) => state.formAdminState.editing);
  const code = useSelector((state) => state.products.code);
  const formReduxState = useSelector((state) => state.formAdminState.product);

  useEffect(() => {
    if (editing) setFormState(formReduxState);
    else setFormState(initialState);
  }, [editing, formReduxState]);

  useEffect(() => {
    if (code === 202) dispatch(editStateEditingFormAdmin(false));
  }, [code, dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (["price", "stock"].includes(name)) {
      setFormState({ ...formState, [name]: +value });
    } else {
      setFormState({ ...formState, [name]: value });
    }
  };

  const handlePost = (event) => {
    event.preventDefault();
    setFormState(initialState);
    dispatch(postProduct(formState));
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(putProduct(formState, formReduxState.id));
  };

  return (
    <form className="flex flex-col items-center bg-gray-200 w-4/12 p-3 my-4 mx-auto text-center gap-2">
      <label htmlFor="nameProduct">Product</label>
      <input
        type="text"
        value={formState.name}
        onChange={handleChange}
        className="w-10/12 p-1"
        name="name"
        id="nameProduct"
      />

      <label htmlFor="brand">Brand</label>
      <input
        type="text"
        value={formState.brand}
        onChange={handleChange}
        className="w-10/12 p-1"
        name="brand"
        id="brandProduct"
      />

      <label htmlFor="priceProduct">Price</label>
      <input
        type="number"
        value={formState.price !== 0 ? formState.price : ""}
        onChange={handleChange}
        className="w-10/12 p-1"
        name="price"
        id="priceProduct"
      />

      <label htmlFor="stockProduct">Stock</label>
      <input
        type="number"
        value={formState.stock !== 0 ? formState.stock : ""}
        onChange={handleChange}
        className="w-10/12 p-1"
        name="stock"
        id="stockProduct"
      />

      <label htmlFor="imageProduct">Url Image</label>
      <input
        type="text"
        value={formState.image}
        onChange={handleChange}
        className="w-10/12 p-1"
        id="imageProduct"
      />

      <button
        type="submit"
        onClick={editing ? handleUpdate : handlePost}
        className="bg-blue-200 w-4/12 p-1"
      >
        {editing ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default FormularioAdmin;
