import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();
  const cardData = {
    title: "Premium Plan",
    description: "Get the most out of our service with the premium plan.",
    price: 0,
    features: [
      "Feature 1: Unlimited access",
      "Feature 2: Priority support",
      "Feature 3: Free updates",
    ],
  };

  const cardDataDuo = {
    title: "Premium Plan",
    description: "Get the most out of our service with the premium plan.",
    price: 29.99,
    features: [
      "Feature 1: Unlimited access",
      "Feature 2: Priority support",
      "Feature 3: Free updates",
    ],
  };

  const cardDataFamily = {
    title: "Premium Plan",
    description: "Get the most out of our service with the premium plan.",
    price: 40.99,
    features: [
      "Feature 1: Unlimited access",
      "Feature 2: Priority support",
      "Feature 3: Free updates",
    ],
  };

  const hanldePrice = () => {
    const price = cardData.price;
    navigate(`/subscription/${price}`);
  };
  const hanldePrice2 = () => {
    const price = cardDataDuo.price;
    navigate(`/subscription/${price}`);
  };
  const hanldePrice3 = () => {
    const price = cardDataFamily.price;
    navigate(`/subscription/${price}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <div className="max-w-full rounded overflow-hidden shadow-lg m-4 hover:shadow-2xl">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">{cardData.title}</h2>
          <p className="text-xl font-bold text-gray-800">${cardData.price}</p>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-4">{cardData.description}</p>
          <ul className="mb-4">
            {cardData?.features?.map((feature, index) => (
              <li key={index.id} className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-300 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <button
              onClick={hanldePrice}
              className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              free now 1 month
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-full rounded overflow-hidden shadow-lg m-4 hover:shadow-2xl">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {cardDataDuo.title}
          </h2>
          <p className="text-xl font-bold text-gray-800">
            ${cardDataDuo.price}
          </p>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-4">{cardDataDuo?.description}</p>
          <ul className="mb-4">
            {cardDataDuo?.features?.map((feature, index) => (
              <li key={index.id} className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-300 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <button
              onClick={hanldePrice2}
              className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              get premium due
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-full rounded overflow-hidden shadow-lg m-4 hover:shadow-2xl">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {cardDataFamily.title}
          </h2>
          <p className="text-xl font-bold text-gray-800">
            ${cardDataFamily.price}
          </p>
        </div>
        <div className="p-6">
          <p className="text-gray-300 mb-4">{cardDataFamily.description}</p>
          <ul className="mb-4">
            {cardDataFamily.features.map((feature, index) => (
              <li key={index.id} className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-300 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <button
              onClick={hanldePrice3}
              className="w-full py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
            >
              get premium Family
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
