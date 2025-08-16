import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center px-6 py-4 shadow-md bg-white">
      {/* Left Side: Logo + NavLinks */}
      <div className="flex flex-wrap items-center gap-6">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          BODYSTATS
        </Link>
        <div className='flex flex-wrap gap-4'>
          <NavLink
            to="/"
            className={({isActive})=> `hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({isActive})=> `hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({isActive})=> `hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : "text-gray-700"}`}
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Right Side: Add User Button */}
      <div className="mt-2 sm:mt-0">
        <Link 
          to="/add-user"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto block text-center"
        >
          Add User
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
