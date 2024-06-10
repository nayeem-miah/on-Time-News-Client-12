/* eslint-disable react-hooks/exhaustive-deps */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();

  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  console.log(totalPrice);
  useEffect(() => {
    //  fetch client secret
    if (totalPrice && totalPrice > 1) {
      getClientSecret({ price: totalPrice });
    }
    //
  }, [totalPrice?.price]);
  const getClientSecret = async price => {
    const { data } = await axios.post(
      `http://localhost:5000/create-payment-intent`,
      price
    );
    console.log("client secret form server----------> ", data);
    setClientSecret(data.clientSecret);
  };
  // console.log(clientSecret);
  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" lg:ml-96">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn bg-blue-600 px-10"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay (${totalPrice})
      </button>
    </form>
  );
};

export default CheckoutForm;
