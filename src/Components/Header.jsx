import React from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-center gap-3">
        <img className="h-20" src="./assets/lib.png" alt="logo" />
        <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xl text-white px-2.5 py-2.5 rounded-3xl">Welcome to the Library</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-playfair text-gray-400 gap-6">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Seatings</a></li>
        <li><a href="#">Packages</a></li>
      </ul>
      <div className="hidden lg:flex items-center gap-6 font-playfair">
        <a className='text-gray-400' href="#">Sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-500 text-red">Join Waitlist</button>
      </div>
      <div className="lg:hidden ">
        <FaBars />
      </div>
    </div>
  );
};

export default Header;
