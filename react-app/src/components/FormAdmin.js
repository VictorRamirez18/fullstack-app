import React from "react";

function FormularioAdmin() {
  return (
    <div className="flex flex-col items-center bg-gray-200 w-4/12 p-3 my-4 mx-auto text-center gap-2">
      <label htmlFor="Product name">Product</label>
      <input type="text" className="w-10/12" />
      <label htmlFor="Product name">Brand</label>
      <input type="text" className="w-10/12" />
      <label htmlFor="Product name">Price</label>
      <input type="number" className="w-10/12" />
      <label htmlFor="Product name">Stock</label>
      <input type="number" className="w-10/12" />
      <button className="bg-blue-200 w-4/12 p-1">Create</button>
    </div>
  );
}

export default FormularioAdmin;
