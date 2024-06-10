import { useNavigate } from "react-router-dom";

const Plans = () => {
  const navigate = useNavigate();
  const allCardData = [
    {
      premium_id: 1,
      title: "Premium Plan",
      description: "Get the most out of our service with the premium plan.",
      price: 0,
      features: [
        "Feature 1: Unlimited access",
        "Feature 2: Priority support",
        "Feature 3: Free updates",
      ],
      button: "Try Free 1 Month",
    },
    {
      premium_id: 2,
      title: "Premium Plan",
      description: "Get the most out of our service with the premium plan.",
      price: 5,
      features: [
        "Feature 1: Unlimited access",
        "Feature 2: Priority support",
        "Feature 3: Free updates",
      ],
      button: "get premium due",
    },
    {
      premium_id: 3,
      title: "Premium Plan",
      description: "Get the most out of our service with the premium plan.",
      price: 9,
      features: [
        "Feature 1: Unlimited access",
        "Feature 2: Priority support",
        "Feature 3: Free updates",
      ],
      button: "Join Family Plan",
    },
  ];
  const hanldePrice = () => {
    navigate("subscription");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {/* free 1 month */}
      {allCardData.map((data, index) => (
        <div
          key={index.id}
          className="max-w-full rounded overflow-hidden shadow-lg m-4 border-purple-500 border"
        >
          <div className="bg-gray-200 p-4 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">{data.title}</h2>
            <p className="text-xl font-bold text-gray-800">${data.price}</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">{data.description}</p>
            <ul className="mb-4">
              {data.features.map((feature, index) => (
                <li key={index.id} className="flex items-center mb-2">
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
              <button
                onClick={hanldePrice}
                className="text-xl font-bold btn bg-white rounded-lg text-pink-600"
              >
                {data.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Plans;
