import React, { useState } from "react";
import MenuLine from "../images/Menu.svg"; // your hamburger img
import { FaTimes } from "react-icons/fa"; // close icon
import Logo from "../images/Logo.svg"; // your logo

const Menu = ({ className }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`bg-white shadow-md ${className}`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img src={Logo} alt="logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[17px] font-medium">
          <li className="hover:text-[#035E89] cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-[#035E89] cursor-pointer">
            <a href="#">Service</a>
          </li>
          <li className="hover:text-[#035E89] cursor-pointer">
            <a href="#">Pricing</a>
          </li>
          <li className="hover:text-[#035E89] cursor-pointer">
            <a href="#">Track Ship</a>
          </li>
          <li className="hover:text-[#035E89] cursor-pointer">
            <a href="#">About Us</a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-[#035E89] text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#035E89] hover:border hover:border-[#035E89] transition">
            Log in
          </button>
          <button className="border border-[#035E89] text-[#035E89] px-4 py-2 rounded-lg hover:bg-[#035E89] hover:text-white transition">
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaTimes />
          ) : (
            <img src={MenuLine} alt="menu" className="w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4">
          <ul className="flex flex-col gap-4 text-[17px] font-medium">
            <li className="hover:text-[#035E89] cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-[#035E89] cursor-pointer">
              <a href="#">Service</a>
            </li>
            <li className="hover:text-[#035E89] cursor-pointer">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-[#035E89] cursor-pointer">
              <a href="#">Track Ship</a>
            </li>
            <li className="hover:text-[#035E89] cursor-pointer">
              <a href="#">About Us</a>
            </li>
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <button className="bg-[#035E89] text-white py-2 rounded-lg hover:bg-white hover:text-[#035E89] hover:border hover:border-[#035E89] transition">
              Log in
            </button>
            <button className="border border-[#035E89] text-[#035E89] py-2 rounded-lg hover:bg-[#035E89] hover:text-white transition">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
