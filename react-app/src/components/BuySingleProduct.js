import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { buyProduct } from "../redux/actions/buys.action";

function BuySingleProduct({ product }) {
  const [amount, setAmount] = useState(0);

  const handleBuy = () => {
    // Object.defineProperty();
    product.amount = +amount;
    product.total = product.amount * product.price;
    console.log(product);
  };
  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen">
      <div className="flex w-11/12 border border-black h-64 my-32 border-collapse">
        <div className="w-1/3 flex h-full p-4 border border-black">
          <img src="#" alt="imageProduct" />
        </div>
        <div className="w-1/3 flex flex-col h-full justify-around gap-2 p-4 border border-black">
          <h2>{product.name}</h2>
          <h2>{product.brand}</h2>
          <h2>{product.price}</h2>
        </div>
        <div className="w-1/3 flex flex-col h-full justify-around gap-2 p-4 border border-black">
          <h2>{product.stock}</h2>
          <Select setAmount={setAmount} />
          <button
            className="bg-blue-400 py-1 px-2 rounded-md w-4/12"
            onClick={handleBuy}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

const Select = ({ setAmount }) => {
  const amountsOptionsSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleSelect = (event) => {
    const { value } = event.target;
    setAmount(value);
  };
  return (
    <div>
      <label htmlFor="selectAmount">Cantidad: </label>
      <select name="selectAmount" id="selectAmount" onChange={handleSelect}>
        {amountsOptionsSelect.map((number, index) => {
          return (
            <option value={number} key={index}>
              {number}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BuySingleProduct;
