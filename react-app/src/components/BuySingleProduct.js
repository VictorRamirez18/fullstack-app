import React, { useEffect, useState } from "react";
import { buyProduct } from "../redux/actions/buys.action";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/actions/products.action";
import { useHistory } from "react-router-dom";

function BuySingleProduct({ id }) {
  const dispatch = useDispatch();
  let history = useHistory();
  const [amount, setAmount] = useState(1);

  const buyed = useSelector((state) => state.buys.buyed);
  const token = useSelector((state) => state.signin.token);

  const singleProduct = useSelector((state) => state.products.singleProduct);
  if (singleProduct.id !== undefined) {
    singleProduct.idProduct = singleProduct.id;
    delete singleProduct.id;
  }

  const handleBuy = () => {
    singleProduct.amount = +amount;
    singleProduct.total = singleProduct.amount * singleProduct.price;
    dispatch(buyProduct(singleProduct, token));
  };

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (buyed) {
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }
  }, [buyed, history]);

  return (
    <div className="flex flex-col items-center bg-gray-200 min-h-screen">
      <div className="bg-blue-300 flex w-11/12 flex-wrap border border-black h-auto lg:h-64 my-32 border-collapse">
        <div className="w-full sm:w-1/2 lg:w-1/3 flex h-64 lg:h-full p-4 border border-black">
          <img
            src={singleProduct.image}
            alt="imageProduct"
            className="w-full object-cover"
          />
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col h-64 lg:h-full justify-around items-center sm:items-start gap-2 p-4 border border-black">
          <h2 className="text-2xl font-medium">{singleProduct.name}</h2>
          <h2 className="text-xl">{singleProduct.brand}</h2>
          <h2 className="text-3xl">${singleProduct.price}</h2>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col h-64 lg:h-full justify-around items-center lg:items-start text-center lg:text-left gap-2 p-4 border border-black">
          <h2 className="text-xl">Stock: {singleProduct.stock}</h2>
          <Select setAmount={(amount, setAmount)} />
          <button
            className="bg-blue-600 text-white py-1 px-2 rounded-md w-full sm:w-4/12"
            onClick={handleBuy}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

const Select = ({ amount, setAmount }) => {
  const amountsOptionsSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSelect = (event) => {
    const { value } = event.target;
    setAmount(value);
  };

  return (
    <div>
      <label htmlFor="selectAmount" className="text-xl">
        Cantidad:{" "}
      </label>
      <select
        name="selectAmount"
        id="selectAmount"
        onChange={handleSelect}
        value={amount}
        className="p-1"
      >
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
