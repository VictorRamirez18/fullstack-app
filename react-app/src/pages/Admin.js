import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormAdmin from "../components/FormAdmin";
import TableAdmin from "../components/TableAdmin";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import ModalDelete from "../components/ModalDelete";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Admin() {
  const loading = useSelector((state) => state.products.loading);
  const logged = useSelector((state) => state.signin.logged);
  const history = useHistory();

  useEffect(() => {
    if (!logged) {
      history.push("/");
    }
  }, [logged, history]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FormAdmin />
      <div className="w-full overflow-x-scroll md:overflow-auto md:p-4 min-h-screen">
        <TableAdmin />
        {loading && <Spinner />}
      </div>
      <Alert />
      <ModalDelete />
      <Footer />
    </div>
  );
}

export default Admin;
