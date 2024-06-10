import { Link } from "react-router-dom";

const Subscription = ({price}) => {
  console.log(price);
  return (
    <div className="subscription-banner pt-20 min-h-[calc(100vh-180px)]">
      <div className="my-10 text-center">
        <h2 className="  text-2xl lg:text-3xl ">
          🎉 Subscribe Now for Exclusive Benefits! 🎉
        </h2>
        <p>Unlock Premium Content and Features Today!</p>
      </div>

      <div className="payment-gateway-icons ">
        {/* Insert Payment Gateway Icons here */}
        <select className="lg:ml-96 ml-20 bg text-center w-1/2 lg:w-1/3 p-2 rounded bg-gray-500">
          <label className="text-gray-700 dark:text-gray-200">
            select dropdown
          </label>
          <option value="5 minute">5 minute </option>
          <option value="5 days">5 days </option>
          <option value="10 days">10 days </option>
        </select>
        <br />
        <Link to={'/paymentPage'} className="btn bg-purple-500 text-black hover:text-white lg:ml-96 ml-20 bg text-center w-1/2 lg:w-1/3 mt-5">Subscribe Now</Link>
      </div>
    </div>
  );
};

export default Subscription;
