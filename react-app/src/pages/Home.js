import React from "react";
import Navbar from "../components/Navbar";
import CardsProducts from "../components/CardsProducts";
import Footer from "../components/Footer";
import Alert from "../components/Alert";

function Home() {
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">
      <Navbar />
      <CardsProducts />
      <Footer />
      <Alert />
    </div>
  );
}

export default Home;
