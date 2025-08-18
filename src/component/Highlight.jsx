import React from "react";
import Vector from "../images/vector.svg";
import Truck from "../images/Background.png";

const Highlight = () => {
  return (
    <div className="flex justify-center my-9 mx-4 md:mt-[-500px] lg:mt-[-500px] lg:mb-[100px]">
      <div
        className="bg-[#FAFAFA] w-full max-w-[1100px] p-6 rounded-2xl shadow-md 
        md:flex md:items-center"
      >
        {/* Left side text */}
        <div className="w-full text-left md:w-1/2">
          <h2 className="font-bold text-2xl md:text-[22px] lg:text-3xl py-4">
            Your Fleet’s Safety, Our Top Priority
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-[15px] lg:text-base">
            Regular safety checks and maintenance are part of our commitment to
            keeping your fleet in top condition. Our app schedules and tracks
            inspections, ensuring that every vehicle meets stringent safety
            standards.
          </p>

          <div className="flex flex-col items-start mt-6">
            <button
              className="bg-[#035E89] text-white py-2 px-5 text-[15px] rounded-md mb-6
              hover:bg-white hover:text-[#035E89] hover:border hover:border-[#035E89] transition duration-300"
            >
              Get a Free Quote
            </button>
            {/* Decorative Quote */}
            <img
              className="w-[60px] md:w-[55px] lg:w-[60px] opacity-40"
              src={Vector}
              alt="Vector"
            />
          </div>
        </div>

        {/* Right side truck image */}
        <div className="w-full flex justify-center mt-6 md:w-1/2 md:justify-end md:mt-0">
          <img
            src={Truck}
            alt="Truck"
            className="w-[90%] md:w-[80%] lg:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
