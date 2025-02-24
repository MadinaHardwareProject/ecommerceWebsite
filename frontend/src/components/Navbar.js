import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">Madina Hardware</Link>
        <div>
          <Link to="/cart" className="px-4">🛒 Cart</Link>
          <Link to="/login" className="px-4">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
