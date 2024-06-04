const Plans = () => {
  const cardData = {
    title: "Premium Plan",
    description: "Get the most out of our service with the premium plan.",
    price: "Free",
    features: [
      "Feature 1: Unlimited access",
      "Feature 2: Priority support",
      "Feature 3: Free updates",
    ],
  };
  const cardDataDuo = {
    title: "Premium Plan",
    description: "Get the most out of our service with the premium plan.",
    price: "$29.99/month",
    features: [
      "Feature 1: Unlimited access",
      "Feature 2: Priority support",
      "Feature 3: Free updates",
    ],
  };
  const cardDataFamily = {
    title: "Premium Plan",
    description: "Get the most out of our service with the premium plan.",
    price: "$40.99/month",
    features: [
      "Feature 1: Unlimited access",
      "Feature 2: Priority support",
      "Feature 3: Free updates",
    ],
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {/* free 1 month */}
      <div className="max-w-full rounded overflow-hidden shadow-lg m-4 border-purple-500 border">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">{cardData.title}</h2>
          <p className="text-xl font-bold text-gray-800">{cardData.price}</p>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">{cardData.description}</p>
          <ul className="mb-4">
            {cardData.features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-600 mr-2"
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
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <button className="text-xl font-bold btn bg-white rounded-lg text-pink-600">
              Try Free 1 Month
              {/* {cardData.price} */}
            </button>
          </div>
        </div>
      </div>
      {/* Go premuam Duo */}
      <div className="max-w-full rounded overflow-hidden shadow-lg m-4 border-purple-500 border">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {cardDataDuo.title}
          </h2>
          <p className="text-xl font-bold text-gray-800">{cardDataDuo.price}</p>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">{cardDataDuo.description}</p>
          <ul className="mb-4">
            {cardDataDuo.features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-600 mr-2"
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
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <button className="text-xl font-bold btn bg-white rounded-lg text-pink-600">
              get Premium Duo
            </button>
          </div>
        </div>
      </div>
      {/* Go Premium family */}
      <div className="max-w-full rounded overflow-hidden shadow-lg m-4 border-purple-500 border">
        <div className="bg-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {cardDataFamily.title}
          </h2>
          <p className="text-xl font-bold text-gray-800">
            {cardDataFamily.price}
          </p>
        </div>
        <div className="p-6">
          <p className="text-gray-600 mb-4">{cardDataFamily.description}</p>
          <ul className="mb-4">
            {cardDataFamily.features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 text-gray-600 mr-2"
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
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <button className="text-xl font-bold btn bg-white rounded-lg text-pink-600">
              get Premium Family
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
