import React from "react";

const MenuLg = ({ className }) => {
  return (
    <div className={`${className} w-full`}>
      <div className="flex items-center justify-between px-6 py-3">
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 lg:gap-12 text-[15px] lg:text-base">
          <li className="text-[#035E89] font-bold px-2 cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="hover:font-bold px-2 cursor-pointer">
            <a href="#">Service</a>
          </li>
          <li className="hover:font-bold px-2 cursor-pointer">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:font-bold px-2 cursor-pointer">
            <a href="#">Track Ship</a>
          </li>
          <li className="hover:font-bold  px-2 cursor-pointer">
            <a href="#">About Us</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <button
            className="bg-[#035E89] text-white py-2 px-5 rounded-[6px] cursor-pointer
              hover:bg-white hover:text-[#035E89] hover:border hover:border-[#035E89] transition duration-300"
          >
            Log in
          </button>
          <button
            className="bg-white text-[#035E89] border border-[#035E89] py-2 px-5 rounded-[6px] cursor-pointer
              hover:bg-[#035E89] hover:text-white transition duration-300"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuLg;
