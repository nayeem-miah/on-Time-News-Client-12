import { useEffect, useState } from "react";
import Chaarts from "./Chaarts";
import Charts1 from "./Charts1";
import Charts2 from "./Charts2";
import Loader from "../../../Compoents/EmptyState/loader";

const AdminHome = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="my-10 mt-16 ">
          <Chaarts></Chaarts>

          <Charts2></Charts2>
          <Charts1></Charts1>
        </div>
      )}
    </div>
  );
};

export default AdminHome;
