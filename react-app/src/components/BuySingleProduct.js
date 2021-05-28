import React from "react";

function BuySingleProduct() {
  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen">
      <div className="flex w-11/12 border border-black h-64 my-32 border-collapse">
        <div className="w-1/3 flex h-full p-4 border border-black">
          <img src="#" alt="imageProduct" />
        </div>
        <div className="w-1/3 flex flex-col h-full justify-around gap-2 p-4 border border-black">
          <h2>Product</h2>
          <h2>Brand</h2>
          <h2>Price</h2>
        </div>
        <div className="w-1/3 flex flex-col h-full justify-around gap-2 p-4 border border-black">
          <h2>Stock</h2>
          <Select />
          <button className="bg-blue-400 py-1 px-2 rounded-md w-4/12">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

const Select = () => {
  const amountsOptionsSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <label htmlFor="selectAmount">Cantidad: </label>
      <select name="selectAmount" id="selectAmount">
        {amountsOptionsSelect.map((number) => {
          return <option value={number}>{number}</option>;
        })}
      </select>
    </div>
  );
};

export default BuySingleProduct;
