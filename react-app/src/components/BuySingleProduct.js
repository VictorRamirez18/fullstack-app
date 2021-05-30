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

  const singleProduct = useSelector((state) => state.products.singleProduct);
  if (singleProduct.id !== undefined) {
    singleProduct.idProduct = singleProduct.id;
    delete singleProduct.id;
  }

  const handleBuy = () => {
    singleProduct.amount = +amount;
    singleProduct.total = singleProduct.amount * singleProduct.price;
    dispatch(buyProduct(singleProduct));
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
      <div className="flex w-11/12 border border-black h-64 my-32 border-collapse">
        <div className="w-1/3 flex h-full p-4 border border-black">
          <img src={singleProduct.image} alt="imageProduct" />
        </div>
        <div className="w-1/3 flex flex-col h-full justify-around gap-2 p-4 border border-black">
          <h2>{singleProduct.name}</h2>
          <h2>{singleProduct.brand}</h2>
          <h2>{singleProduct.price}</h2>
        </div>
        <div className="w-1/3 flex flex-col h-full justify-around gap-2 p-4 border border-black">
          <h2>{singleProduct.stock}</h2>
          <Select setAmount={(amount, setAmount)} />
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

const Select = ({ amount, setAmount }) => {
  const amountsOptionsSelect = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleSelect = (event) => {
    const { value } = event.target;
    setAmount(value);
  };

  return (
    <div>
      <label htmlFor="selectAmount">Cantidad: </label>
      <select
        name="selectAmount"
        id="selectAmount"
        onChange={handleSelect}
        value={amount}
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
