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
    if (products.length === 0 || buyed) {
      if (buyed) dispatch(toogleBuyed(false));
      dispatch(getProducts());
    } else {
      console.log("Products already fetched");
    }
  }, [dispatch, buyed]);

  return (
    <div className="flex justify-around flex-wrap gap-3 min-h-screen w-full py-4">
      {loading && <Spinner />}
      {!loading && products.length === 0 && <h2>No products available</h2>}
      {products.length > 0 &&
        products.map((product) => {
          return (
            <Link
              to={`/BuyProduct/${product.id}`}
              className="w-1/5"
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
    <div className="flex flex-col gap-2 bg-gray-400 h-64 w-full p-2">
      <div className="w-full border-black h-2/5">
        <img src={product.image} alt="imageProduct" />
      </div>
      <div className="w-full h-3/5 p-2">
        <h2>{product.name}</h2>
        <h2>Brand: {product.brand}</h2>
        <h2>Price: {product.price}</h2>
        <h2>Stock: {product.stock}</h2>
      </div>
    </div>
  );
};

export default CardsProducts;
