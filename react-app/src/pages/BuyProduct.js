import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuySingleProduct from "../components/BuySingleProduct";
import { useParams } from "react-router-dom";

function BuysProduct() {
  const { id } = useParams();
  const { name } = useParams();
  const { brand } = useParams();
  const { price } = useParams();
  const { stock } = useParams();

  const product = {
    id: +id,
    name: name,
    brand: brand,
    price: +price,
    stock: +stock,
  };
  return (
    <div>
      <Navbar />
      <BuySingleProduct product={product} />
      <Footer />
    </div>
  );
}

export default BuysProduct;
