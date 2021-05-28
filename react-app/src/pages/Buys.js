import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Buys() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <TableBuys />
      <Footer />
    </div>
  );
}

const TableBuys = () => {
  return (
    <table className="table-auto w-auto border-collapse my-4 mx-4 min-h-screen text-center">
      <thead>
        <tr>
          <td className="border border-black">Product</td>
          <td className="border border-black">Brand</td>
          <td className="border border-black">Price</td>
          <td className="border border-black">Stock</td>
          <td className="border border-black">Amount</td>
          <td className="border border-black">Total</td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Buys;
