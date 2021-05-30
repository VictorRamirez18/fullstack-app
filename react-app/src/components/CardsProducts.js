import React, { useEffect } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/products.action";
import { toogleBuyed } from "../redux/actions/buys.action";

function CardsProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const buyed = useSelector((state) => state.buys.buyed);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (buyed) dispatch(toogleBuyed(false));
  }, [buyed, dispatch]);

  return (
    <div className="flex justify-around flex-wrap gap-3 min-h-screen w-full py-4">
      {loading && <Spinner />}
      {!loading && products.length === 0 && <h2>No products available</h2>}
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Link
              to={`/BuyProduct/${product.id}`}
              className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5"
              key={product.id}
            >
              <CardProduct product={product} />
            </Link>
          );
        })}
    </div>
  );
}

const CardProduct = ({ product }) => {
  return (
    <div className="flex flex-col bg-blue-300 shadow-lg h-96 sm:h-80 w-full p-2">
      <div className="w-full h-3/5">
        <img
          src={product.image}
          alt="imageProduct"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-2/5 py-2 px-2 border border-black">
        <h2 className="text-lg font-medium">{product.name}</h2>
        <h2 className="">Brand: {product.brand}</h2>
        <h2 className="">Price: ${product.price}</h2>
        <h2 className="">Stock: {product.stock}</h2>
      </div>
    </div>
  );
};

export default CardsProducts;
