import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormAdmin from "../components/FormAdmin";

function Admin() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FormAdmin />
      <div className="w-full p-4 min-h-screen">
        <TableAdmin />
      </div>
      <Footer />
    </div>
  );
}

const TableAdmin = () => {
  return (
    <table className="table-auto w-full border-collapse">
      <thead>
        <tr>
          <th className="border border-black">Id</th>
          <th className="border border-black">Product</th>
          <th className="border border-black">Brand</th>
          <th className="border border-black">Price</th>
          <th className="border border-black">Stock</th>
          <th className="border border-black">Actions</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default Admin;
