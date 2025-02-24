import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <Link to={`/product/${product._id}`} className="bg-blue-500 text-white px-4 py-2 mt-2 block text-center rounded">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
