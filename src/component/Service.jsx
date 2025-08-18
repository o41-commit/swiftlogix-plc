import React from "react";
import Clock from "../images/clock.svg";
import File from "../images/Document.svg";
import Screen from "../images/Screencast 2.svg";

const Service = () => {
  return (
    <div className="ml-[10px] lg:ml-[50px] lg:w-[90%]">
      <div className="text-center lg:w-[70%] lg:ml-[250px]">
        <h2 className="text-4xl font-bold mt-10 mb-6">
          Three main{" "}
          <span className="bg-gradient-to-r from-[#88D8FF] to-[#0179B4] bg-clip-text text-transparent">
            services
          </span>
        </h2>

        <p className="mb-8 lg:w-[90%]">
          Our app gives you unparalleled visibility into your entire logistics
          network. Whether you’re managing a single delivery or overseeing
          thousands, you can track the exact location of every shipment in real
          time.
        </p>
      </div>

      <div className="grid grid-rows-3 lg:grid-cols-3 gap-6 lg:gap-12 mx-3 md:grid-cols-3 gap-6 md:gap-9">
        <div className="bg-white border-2 border-[#0069AB] rounded-2xl p-6">
          <div className="bg-[#EFF9FF] h-9 rounded-sm flex items-center justify-center w-8">
            <img className="h-6 w-6" src={Clock} alt="Clock" />
          </div>
          <h3 className="font-bold text-[#035E89] text-2xl py-3">
            Track Every Shipment in Real Time
          </h3>
          <p>
            Stay updated on your cargo’s exact location with instant tracking
            notifications
          </p>
        </div>

        <div className="bg-white border-2 border-[#0069AB] rounded-2xl p-6">
          <div className="bg-[#EFF9FF] h-9 rounded-sm flex items-center justify-center w-8">
            <img className="h-6 w-6" src={File} alt="Document" />
          </div>
          <h3 className="font-bold text-[#035E89] text-2xl py-3">
            Automate Route Optimization
          </h3>
          <p>
            Cut costs and time by letting our AI-driven system optimize delivery
            routes.
          </p>
        </div>

        <div className="bg-white border-2 border-[#0069AB] rounded-2xl p-6">
          <div className="bg-[#EFF9FF] h-9 rounded-sm flex items-center justify-center w-8">
            <img className="h-6 w-6" src={Screen} alt="Analytics" />
          </div>
          <h3 className="font-bold text-[#035E89] text-2xl py-3">
            Detailed Analytics and Reporting
          </h3>
          <p>
            Make data-driven decisions with comprehensive logistics reports at
            your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
