import React from "react";
import Image from "../images/image1.svg";

const Hero = () => {
  return (
    <div className=" md:flex md:items-center lg:flex">
      {/* Left side */}
      <div className="ml-[10px] md:ml-[40px] lg:ml-[50px] md:w-[55%] lg:w-[50%]">
        <div>
          <h2 className="text-[#035E89] text-[32px] md:text-[36px] lg:text-6xl font-bold leading-snug py-3 md:mb-[30px] lg:mb-[50px]">
            Effortless Logistics, Every Step of the Way.
          </h2>

          <p className="my-4 md:w-[80%] lg:w-[60%] md:mb-[30px] lg:mb-[50px] text-[15px] md:text-[16px]">
            Manage your shipments, track in real-time, and get the best
            rates—all from one platform.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          <button
            className="bg-[#035E89] text-white py-2 px-4 text-[14px] md:text-[15px] rounded-[6px] cursor-pointer
              hover:bg-white hover:text-[#035E89] hover:border hover:border-[#035E89] transition duration-300"
          >
            Get a Free Quote
          </button>

          <button
            className="bg-white text-[#035E89] border border-[#035E89] py-2 px-5 text-[14px] md:text-[15px] rounded-[6px] cursor-pointer
              hover:bg-[#035E89] hover:text-white transition duration-300"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right side - image */}
      <div className="relative mt-6 md:mt-0 md:w-[65%] lg:w-[70%] md:ml-[-120px] lg:ml-[-200px] md:z-[-50] lg:z-[-100]">
        <img className="w-full h-full object-cover" src={Image} alt="image" />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-transparent to-white"></div>
      </div>
    </div>
  );
};

export default Hero;
