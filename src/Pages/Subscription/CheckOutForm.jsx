/* eslint-disable react-hooks/exhaustive-deps */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { ImSpinner9 } from "react-icons/im";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const CheckoutForm = ({ totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    //  fetch client secret
    if (totalPrice && totalPrice > 1) {
      getClientSecret({ price: totalPrice });
    }
    //
  }, [totalPrice]);
  const getClientSecret = async price => {
    const { data } = await axiosPublic.post(`/create-payment-intent`, price);
    // console.log("client secret form server----------> ", data);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async event => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true);

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
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
    //  confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("payment Intent ", paymentIntent);
      const paymentInfo = {
        name: user?.name,
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      console.log(paymentInfo);

      try {
        axiosPublic.post("/payment", paymentInfo);
      
      } catch (error) {
        console.log(error);
      }
      setProcessing(false);
    }
  };

  return (
    <>
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
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? (
            <ImSpinner9
              size={24}
              className="animate-spin m-auto text-green-400"
            ></ImSpinner9>
          ) : (
            `Pay $(${totalPrice})`
          )}
        </button>
        {}
        {cardError && <p className="text-red-600 ml-10">{cardError}</p>}
      </form>
    </>
  );
};

export default CheckoutForm;
