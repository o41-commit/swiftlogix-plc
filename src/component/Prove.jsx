import React from "react";

const Prove = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-center text-center lg:ml-[50px] ml-[10px] ">
        <div className="my-2 mt-9 lg:mt-0">
          <h1 className="bg-gradient-to-r text-4xl font-bold leading-[3rem] from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">
            10,000+
          </h1>
          <p className="text-[15px]">Deliveries Managed</p>
        </div>
        <div className="my-2 mt-9 lg:mt-0">
          <h1 className="bg-gradient-to-r text-4xl font-bold leading-[3rem] from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">
            2,500+
          </h1>
          <p className="text-[15px]">Active Clients</p>
        </div>
        <div className="my-2">
          <h1 className="bg-gradient-to-r text-4xl font-bold leading-[3rem] from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">
            98%
          </h1>
          <p className="text-[15px]">On-Time Delivery Rate</p>
        </div>
        <div className="my-2">
          <h1 className="bg-gradient-to-r text-4xl font-bold leading-[3rem] from-[#0179B4] to-[#88D8FF] bg-clip-text text-transparent">
            200+
          </h1>
          <p className="text-[15px]">Industry Awards</p>
        </div>
      </div>
    </div>
  );
};

export default Prove;
