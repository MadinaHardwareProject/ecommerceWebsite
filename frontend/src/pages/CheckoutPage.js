import React, { useState } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe("your_stripe_public_key");

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const handlePayment = async () => {
    const stripe = await stripePromise;
    const { data } = await axios.post("http://localhost:5000/api/checkout", { cartItems });
    
    const result = await stripe.redirectToCheckout({
      sessionId: data.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="mt-4">
        {cartItems.map((item) => (
          <div key={item.product} className="flex justify-between p-4 border">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
          </div>
        ))}
        <button onClick={handlePayment} className="bg-blue-500 text-white px-6 py-2 mt-4">Pay with Stripe</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
