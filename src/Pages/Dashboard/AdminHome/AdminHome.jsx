import { useEffect, useState } from "react";
import Chaarts from "./Chaarts";
import Loader from "../../../Compoents/EmptyState/loader";
import RecentArticles from "./RecentArticles";

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
        <div className="my-10  ">
          <Chaarts></Chaarts>
          <RecentArticles />

        </div>
      )}
    </div>
  );
};

export default AdminHome;
