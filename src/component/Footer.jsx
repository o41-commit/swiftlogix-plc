import { FaFacebook, FaYoutube } from "react-icons/fa";
import Logo from "../images/Logo2.svg";

const Footer = () => {
  return (
    <footer className="bg-[#035E89] text-white pt-12 px-6 lg:px-12">
      {/* Top Section */}
      <div className="border-b border-white/40 pb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 max-w-[1200px] mx-auto">
          {/* Brand */}
          <div className="lg:w-1/3">
            <img src={Logo} alt="Logo" className="mb-6 w-[150px]" />
            <p className="text-base leading-relaxed max-w-[300px]">
              We’re here to support you every step of the way.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 flex-1">
            {/* Support */}
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-gray-200 cursor-pointer">
                  Getting Started
                </li>
                <li className="hover:text-gray-200 cursor-pointer">FAQs</li>
                <li className="hover:text-gray-200 cursor-pointer">
                  Help Articles
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-gray-200 cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-gray-200 cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-3 text-sm">
                <li className="hover:text-gray-200 cursor-pointer">
                  Shipment Tracking
                </li>
                <li className="hover:text-gray-200 cursor-pointer">
                  Route Optimization
                </li>
                <li className="hover:text-gray-200 cursor-pointer">
                  Inventory Management
                </li>
                <li className="hover:text-gray-200 cursor-pointer">
                  Freight Management
                </li>
                <li className="hover:text-gray-200 cursor-pointer">
                  Real-Time Analytics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 max-w-[1200px] mx-auto">
        <div className="flex justify-center gap-6 text-2xl mb-4">
          <FaFacebook className="cursor-pointer hover:text-blue-400 transition" />
          <FaYoutube className="cursor-pointer hover:text-red-400 transition" />
        </div>
        <p className="text-xs md:text-sm opacity-80">
          Swiftlogix 2025 &copy; All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
