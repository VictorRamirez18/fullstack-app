import React from "react";
import { Link } from "react-router-dom";

function CardsProducts() {
  return (
    <div className="flex justify-around flex-wrap gap-3 min-h-screen w-full py-4">
      <Link to="/BuyProduct" className="w-1/5">
        <CardProduct />
      </Link>
      <Link to="/BuyProduct" className="w-1/5">
        <CardProduct />
      </Link>
      <Link to="/BuyProduct" className="w-1/5">
        <CardProduct />
      </Link>
      <Link to="/BuyProduct" className="w-1/5">
        <CardProduct />
      </Link>
      <Link to="/BuyProduct" className="w-1/5">
        <CardProduct />
      </Link>
    </div>
  );
}

const CardProduct = () => {
  return (
    <div className="flex flex-col gap-2 bg-gray-400 h-64 w-full p-2">
      <div className="w-full border-black h-2/5">
        <img src="#" alt="imageProduct" />
      </div>
      <div className="w-full h-3/5 p-2">
        <h2>Producto</h2>
        <h2>Brand</h2>
        <h2>Precio</h2>
        <h2>Stock</h2>
      </div>
    </div>
  );
};

export default CardsProducts;
