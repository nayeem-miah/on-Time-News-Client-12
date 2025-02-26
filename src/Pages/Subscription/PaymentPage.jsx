import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";
import { useParams } from "react-router-dom";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const PaymentPage = () => {
  const { totalPrice } = useParams();
  // console.log(totalPrice);
  return (
    <div className="pt-20 min-h-[calc(100vh-180px)] bg-[url('https://img.freepik.com/premium-photo/bank-card-payment-black-hand-holding-3d-render_1106493-106452.jpg?w=1060')] bg-cover bg-center  items-center justify-center">
    <h1 className="lg:text-4xl text-3xl font-bold text-white text-center py-4">
      Secure Payment
    </h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm totalPrice={totalPrice}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
