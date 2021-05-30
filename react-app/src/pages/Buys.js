import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import { getBuys } from "../redux/actions/buys.action";
import { useHistory } from "react-router-dom";

function Buys() {
  const loading = useSelector((state) => state.buys.loading);
  const logged = useSelector((state) => state.signin.logged);
  const history = useHistory();

  useEffect(() => {
    if (!logged) {
      history.push("/");
    }
  }, [logged, history]);

  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div className="overflow-x-scroll md:overflow-auto md:p-2 my-12 min-h-screen">
        <TableBuys loading={loading} />
      </div>
      {loading && <Spinner />}
      <Footer />
    </div>
  );
}

const TableBuys = ({ loading }) => {
  const dispatch = useDispatch();
  const buys = useSelector((state) => state.buys.buys);

  useEffect(() => {
    dispatch(getBuys());
  }, [dispatch]);

  return (
    <table className="table-auto w-full border-collapse text-center">
      <thead>
        <tr>
          <th className="border border-black">Id</th>
          <th className="border border-black">IdProduct</th>
          <th className="border border-black">Product</th>
          <th className="border border-black">Brand</th>
          <th className="border border-black">Price</th>
          <th className="border border-black">Stock</th>
          <th className="border border-black">Amount</th>
          <th className="border border-black">Total</th>
        </tr>
      </thead>
      <tbody>
        {buys.length > 0 &&
          buys.map((buy) => {
            return (
              <tr key={buy.id}>
                <td className="border border-black">{buy.id}</td>
                <td className="border border-black">{buy.idProduct}</td>
                <td className="border border-black">{buy.name}</td>
                <td className="border border-black">{buy.brand}</td>
                <td className="border border-black">{buy.price}</td>
                <td className="border border-black">{buy.stock}</td>
                <td className="border border-black">{buy.amount}</td>
                <td className="border border-black">{buy.total}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Buys;
