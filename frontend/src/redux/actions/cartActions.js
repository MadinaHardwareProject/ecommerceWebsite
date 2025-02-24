import axios from "axios";

// Add product to cart
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);

  dispatch({
    type: "ADD_TO_CART",
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// Remove product from cart
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: "REMOVE_FROM_CART", payload: id });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
