import React from "react";
import Truck from "../images/image 2.png";

const CTA = () => {
  return (
    <div>
      <div className="my-[70px] md:mx-[60px] lg:mx-[150px] md:rounded-xl lg:rounded-2xl p-3 bg-[#F2FAFF]">
        <div className="ml-[10px] md:ml-[30px] lg:ml-[50px] md:flex lg:flex">
          {/* Left Content */}
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-[#035E89] py-4">
              Ready to Revolutionize Your Logistics Operations?
            </h1>
            <p className="py-4 text-sm md:text-[15px] lg:text-base">
              Join countless other businesses that have streamlined their
              logistics with our cutting-edge solutions
            </p>
            <button
              className="bg-[#035E89] text-white py-2 px-4 ml-0 mx-3 text-[14px] md:text-[15px] mb-[20px] mt-3 rounded-[6px] cursor-pointer
              hover:bg-white hover:text-[#035E89] hover:border-[1px] hover:border-solid 
              hover:border-[#035E89] hover:ease-out hover:duration-[500ms]"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Right Content (Truck Image) */}
          <div className="w-full md:w-1/2 md:flex md:justify-end ml-5 md:ml-6 lg:ml-9">
            <img
              src={Truck}
              alt="Truck image"
              className="w-[85%] md:w-[90%] lg:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
