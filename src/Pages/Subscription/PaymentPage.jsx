import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const PaymentPage = () => {
  const plansPrice = {
    price: 10,
  };
  return (
    <div className=" pt-20 min-h-[calc(100vh-180px)]">
      {/* <h3>payment page </h3> */}
      <Elements stripe={stripePromise}>
        <CheckoutForm plansPrice={plansPrice}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
