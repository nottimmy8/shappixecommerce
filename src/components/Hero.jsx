import React from "react";
import videoBg from "../materials/videoBg.mp4";

const Hero = () => {
  return (
    <div className=" w-full max-h-[600px]  ">
      <div className=" w-full  mx-auto   mt-16 sm:mt-20 py-1  ">
        {/*  */}
        <div className=" relative  w-full max-h-[600px]  ">
          <div className="absolute top-0 left-0 w-full h-full bg-blend-overlay bg-gradient-to-r from-black    "></div>
          <video
            src={videoBg}
            autoPlay
            loop
            muted
            className=" w-full max-h-[600px]  object-cover "
          />
          {/* text */}
          <div className=" absolute top-[20%] text-center w-full  ">
            <h1 className=" text-lg sm:text-2xl md:text-3xl   font-bold text-white mb-3">
              WELCOME TO SHEDA MART
            </h1>
            <p className=" text-xs md:text-base text-white mb-2">
              Your one stop shop for everything you need
            </p>
            <button className="bg-green500 text-white text-xs py-2 px-5 rounded-lg ">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
