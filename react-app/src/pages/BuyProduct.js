import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BuySingleProduct from "../components/BuySingleProduct";
import { useParams } from "react-router-dom";
import AlertBuys from "../components/AlertBuys";

function BuysProduct() {
  const { id } = useParams();

  return (
    <div>
      <Navbar />
      <BuySingleProduct id={id} />
      <AlertBuys />
      <Footer />
    </div>
  );
}

export default BuysProduct;
