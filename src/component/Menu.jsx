import React, { useState } from "react";
import MenuLine from "../images/Menu.svg"; // Hamburger icon
import { FaTimes } from "react-icons/fa"; // Close icon
import Logo from "../images/Logo.svg"; // Logo

const Menu = () => {
  const [open, setOpen] = useState(false);

  // Helper to auto-close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home" className="cursor-pointer">
          <img src={Logo} alt="logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-[16px] font-medium text-gray-700">
          <li className="hover:text-[#035E89] transition duration-200">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-[#035E89] transition duration-200">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-[#035E89] transition duration-200">
            <a href="#features">Features</a>
          </li>
          <li className="hover:text-[#035E89] transition duration-200">
            <a href="#why-us">Why Us</a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="text-gray-700 px-4 py-2 font-medium hover:text-[#035E89] transition">
            Log in
          </button>
          <button className="bg-[#035E89] text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 shadow-md hover:shadow-blue-500/10 transition duration-300">
            Sign up
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl cursor-pointer text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <img src={MenuLine} alt="menu" className="w-6" />}
        </button>
      </div>

      {/* Mobile Menu Slide-down Overlay */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 absolute w-full left-0 shadow-lg">
          <ul className="flex flex-col gap-5 text-[17px] font-medium text-gray-700">
            <li className="hover:text-[#035E89]" onClick={handleLinkClick}>
              <a href="#home" className="block w-full">Home</a>
            </li>
            <li className="hover:text-[#035E89]" onClick={handleLinkClick}>
              <a href="#services" className="block w-full">Services</a>
            </li>
            <li className="hover:text-[#035E89]" onClick={handleLinkClick}>
              <a href="#features" className="block w-full">Features</a>
            </li>
            <li className="hover:text-[#035E89]" onClick={handleLinkClick}>
              <a href="#why-us" className="block w-full">Why Us</a>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <button className="text-gray-700 py-3 font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              Log in
            </button>
            <button className="bg-[#035E89] text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition">
              Sign up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;