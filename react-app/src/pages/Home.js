import React from "react";
import Navbar from "../components/Navbar";
import CardsProducts from "../components/CardsProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">
      <Navbar />
      <CardsProducts />
      <Footer />
    </div>
  );
}

export default Home;
