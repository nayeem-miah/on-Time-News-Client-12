import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Subscription = () => {
  const { price } = useParams();

  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState();

  const priceNumber = parseFloat(price);

  //convert it in days
  const periodValues = {
    1: 10 / (24 * 60),
    5: 50,
    10: 100,
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
    <div className="subscription-banner pt-20 min-h-[calc(100vh-180px)]">
      <div className="my-10 text-center">
        <h2 className="  text-2xl lg:text-3xl ">
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
            <option value="1">1 minute</option>
            <option value="5">5 days</option>
            <option value="10">10 days</option>
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
  );
};

export default Subscription;
