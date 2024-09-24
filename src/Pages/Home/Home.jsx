import { Helmet } from "react-helmet-async";
import Newsletter from "./NewsLetter/NewsLetter";
import Header from "./Header/Header";
import AllPublisher from "./AllPublisher/AllPublisher";
import StatisticPage from "../StatisticPaage/StatisticPage";
import Plans from "../plans/plans";
import { useEffect, useState } from "react";

import Loader from "../../Compoents/EmptyState/loader";

const Home = () => {
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
        <div>
          <Helmet>
            <title>OnTimeNews | Home Page </title>
          </Helmet>

          {/* headers */}
          <Header></Header>

          <AllPublisher></AllPublisher>
          <div className="my-10">
            <StatisticPage></StatisticPage>
          </div>
          <div className="md:w-4/12 w-36 mx-auto text-center my-8">
            <h4 className="text-3xl text-purple-500 my-6 text-center uppercase border-b-4 py-4">
              Plans
            </h4>
          </div>
          <Plans></Plans>
          <div className="my-9">
            <Newsletter></Newsletter>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
