import React from "react";
import scan from "../materials/scan.png";

const Scan = () => {
  return (
    <div className=" mt-14 mb-10">
      <div className="max-w-6xl text-center mx-auto p-2">
        <div className=" flex bg-secondary justify-between items-center py-8 px-9 md:px-28 rounded-lg ">
          <div className=" w-[350px] text-start">
            <h1 className=" text-xl md:text-4xl text-white font-bold">
              The easiest way to shop and save
            </h1>
            <p className="text-sm text-white">
              Download the ReniTrust app. Fund & shop from Sheda Mart easily
            </p>
          </div>
          <img src={scan} alt="" className=" max-w-24 " />
        </div>
      </div>
    </div>
  );
};

export default Scan;
