import React from "react";
import HeroImg from "../images/HeroImg.jpg";

const Hero = () => {
  return (
    <div 
      className="relative min-h-[85vh] md:min-h-screen flex items-center bg-cover bg-center bg-no-repeat px-6 md:px-12 lg:px-24"
      style={{ backgroundImage: `url(${HeroImg})` }}
    >
      {/* Premium Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[800px] text-white">
        {/* Accent Tag */}
        <span className="inline-block text-[#035E89] bg-[#035E89]/10 border border-[#035E89]/30 rounded-full px-4 py-1 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
          Next-Gen Logistics
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6">
          Effortless Logistics, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#035E89]">
            Every Step of the Way.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg lg:text-xl font-light mb-10 max-w-[600px] leading-relaxed">
          Manage your shipments, track in real-time, and get the best
          rates—all from one secure, unified platform.
        </p>

        {/* Premium Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="bg-[#035E89] hover:bg-blue-600 text-white font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-0.5 transition-all duration-300 text-center"
          >
            Get a Free Quote
          </button>

          <button
            className="bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-8 rounded-lg border border-white/20 backdrop-blur-md transform hover:-translate-y-0.5 transition-all duration-300 text-center"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;