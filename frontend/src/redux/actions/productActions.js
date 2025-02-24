import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  const { data } = await axios.get("http://localhost:5000/api/products");
  dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: data });
};
