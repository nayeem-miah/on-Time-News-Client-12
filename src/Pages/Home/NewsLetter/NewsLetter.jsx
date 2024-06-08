import { useState } from "react";
import toast from "react-hot-toast";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter");

    setEmail("");
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Get the latest updates and offers directly to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex items-center max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            // defaultValue={user?.email}
            placeholder="Your email address"
            required
            className="py-3 px-4 w-full border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
