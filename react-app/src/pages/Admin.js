import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormAdmin from "../components/FormAdmin";
import TableAdmin from "../components/TableAdmin";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";

function Admin() {
  const loading = useSelector((state) => state.products.loading);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FormAdmin />
      <div className="w-full p-4 min-h-screen">
        <TableAdmin />
        {loading && <Spinner />}
      </div>
      <Alert />
      <Footer />
    </div>
  );
}

export default Admin;
