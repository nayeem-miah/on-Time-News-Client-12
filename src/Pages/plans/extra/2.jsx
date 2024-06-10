import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



const Subscriptions = () => {
    const { price } = useParams();
    
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState();

    const priceNumber = parseFloat(price);

    //convert it in days
    const periodValues = {
        "1": 10 / (24 * 60),
        "5": 50,
        "10": 100
    };

    // Handle the subscribe button click
    const handleSubscribe = (event) => {
        event.preventDefault();

        // Get the selected period from the form
        const form = event.target;
        const selectedPeriod = form.period.value;


        // Get the period value
        const periodValue = periodValues[selectedPeriod];

        // Calculate the total price
        const totalPrice = periodValue ? (priceNumber * periodValue).toFixed(2) : 0;
        setTotalPrice(totalPrice);
        // console.log(totalPrice);


        navigate(`/payment/${totalPrice}`);
    };

    return (
        <section className="bg-white container mx-auto p-20 dark:bg-gray-900">
            <div className="max-w-3xl px-6 py-16 mx-auto text-center">
                <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 noto-700">
                   Get Subscriptions
                </h1>
                <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400 noto-600">
                    Choose Your Period
                </p>
                

                <form onSubmit={handleSubscribe} className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                    <div className="flex flex-col gap-2">

                        <select className="rounded-md border border-[#343090] py-2 px-6 noto-500" name="period" required>
                            <option value="" disabled>Select period</option>
                            <option value="1">1 minute</option>
                            <option value="5">5 days</option>
                            <option value="10">10 days</option>
                        </select>

                        <button
                            type="submit"
                            className="btn text-white hover:bg-[#5f59f7] bg-[#343090] noto-500"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </section>

    );
};

export default Subscriptions;