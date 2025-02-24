import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go Shopping</Link></p>
      ) : (
        cartItems.map((item) => (
          <div key={item.product} className="flex justify-between border-b p-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => removeHandler(item.product)} className="bg-red-500 text-white px-4 py-2">Remove</button>
          </div>
        ))
      )}
      <div className="mt-4">
        <Link to="/checkout" className="bg-green-500 text-white px-6 py-2">Proceed to Checkout</Link>
      </div>
    </div>
  );
};

export default CartPage;
