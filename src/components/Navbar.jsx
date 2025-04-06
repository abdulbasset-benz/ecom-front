import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-orange-600">MyApp</h1>
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
