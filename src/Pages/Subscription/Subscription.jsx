/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../Compoents/EmptyState/loader";

const Subscription = () => {
  const { price } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState();

  const priceNumber = parseFloat(price);

  //convert it in days
  const periodValues = {

    7: 7,
    30: 30,
    365: 365,
  };

  // Handle the subscribe button click
  const handleSubscribe = event => {
    event.preventDefault();

    // Get the selected period from the form
    const form = event.target;
    const selectedPeriod = form.period.value;

    // Get the period value
    const periodValue = periodValues[selectedPeriod];

    // Calculate the total price
    const totalPrice = periodValue ? (priceNumber * periodValue).toFixed(2) : 0;
    setTotalPrice(totalPrice);

    navigate(`/payment/${totalPrice}`);
  };
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="subscription-banner pt-20 min-h-[calc(100vh-180px)]">
          <Helmet>
            <title>OnTimeNews | subscription Page </title>
          </Helmet>
          <div className="my-10 text-center">
            <h2 className="  text-2xl lg:text-3xl text-green-500">
              🎉 Subscribe Now for Exclusive Benefits! 🎉
            </h2>
            <p>Unlock Premium Content and Features Today!</p>
          </div>

          <form onSubmit={handleSubscribe} className="">
            <div className="">
              <select
                className="lg:ml-96 ml-20 bg text-center w-1/2 lg:w-1/3 p-2 rounded bg-gray-500"
                name="period"
                required
              >
                <option value="" disabled>
                  Select period
                </option>
                <option value="7">7 days</option>
                <option value="30">30 days</option>
                <option value="365">1 year</option>
              </select>

              <button
                type="submit"
                className="btn bg-purple-500 text-black hover:text-white lg:ml-96 ml-20 bg text-center w-1/2 lg:w-1/3 mt-5"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Subscription;
