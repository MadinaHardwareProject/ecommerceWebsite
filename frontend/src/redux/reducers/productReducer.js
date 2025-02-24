export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_SUCCESS":
      return { products: action.payload };
    default:
      return state;
  }
};
