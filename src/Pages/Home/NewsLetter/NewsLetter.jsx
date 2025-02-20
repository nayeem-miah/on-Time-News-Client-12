import { useState } from "react";
import toast from "react-hot-toast";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter");

    setEmail("");
  };

  return (
    <section className="py-4">
      <div className="max-w-4xl mx-auto px-4 text-center text-white">
        <h2 className="md:text-3xl lg:text-3xl text-2xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-lg mb-6">
          Stay up-to-date with the latest news and exclusive offers delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="py-3 px-6 w-full sm:w-96 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300 ease-in-out"
          />
          <button
            type="submit"
            className=" py-3 px-6 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-blue-600 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
