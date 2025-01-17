import React from "react";
import facebook from "../materials/facebook.png";
import instagram from "../materials/insta.png";
import twitter from "../materials/twitter.png";
import linkedin from "../materials/linkdln.png";

const Footer = () => {
  return (
    <div className="w-full bg-grayscale800 ">
      <div className="max-w-6xl mx-auto p-12 ">
        <div className="text-center">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
            {/* about */}
            <li className="text-white flex flex-col items-start gap-8">
              <a href="" className="text-base font-bold">
                {" "}
                About
              </a>
              <a href="" className=" text-xs">
                About Sheda Mart
              </a>
              <a href="" className=" text-xs">
                News & Blog
              </a>
              <a href="" className=" text-xs">
                Advertise with Us
              </a>
              <a href="" className=" text-xs">
                Affilates & Partners
              </a>
              <a href="" className=" text-xs">
                Sheda Community
              </a>
            </li>
            {/* help */}
            <li className="text-white flex flex-col items-start gap-10">
              <a href="" className="text-base font-bold">
                {" "}
                Help
              </a>
              <a href="" className=" text-xs">
                Sheda Help
              </a>
              <a href="" className=" text-xs">
                Track Orders
              </a>
              <a href="" className=" text-xs">
                Returns
              </a>
              <a href="" className=" text-xs">
                Contact Us
              </a>
              <a href="" className=" text-xs">
                Same Day Delivery
              </a>
              <a href="" className=" text-xs">
                Order Pick Up
              </a>
              <a href="" className=" text-xs">
                Registry
              </a>
            </li>
            {/* stores */}
            <li className="text-white flex flex-col items-start gap-10">
              <a href="" className="text-base font-bold">
                {" "}
                Stores
              </a>
              <a href="" className=" text-xs">
                In-Store Services
              </a>
            </li>
            {/* services */}
            <li className="text-white flex flex-col items-start gap-10">
              <a href="" className="text-base font-bold">
                {" "}
                Services
              </a>
              <a href="" className=" text-xs">
                Sheda Studios
              </a>
              <a href="" className=" text-xs">
                Sheda Academy
              </a>
              <a href="" className=" text-xs">
                Reni Trust
              </a>
              <a href="" className=" text-xs">
                Reni Mail
              </a>
              <a href="" className=" text-xs">
                FireSwitch Technologies
              </a>
            </li>
          </ul>
          {/*  */}
          <div className="mt-11 flex flex-col md:flex-row justify-between items-center  ">
            <div className="flex justify-center items-center gap-4 mb-2 ">
              <img
                src={instagram}
                className=" bg-grayscaleborderdarker p-2 rounded-full"
              />
              <img
                src={facebook}
                className=" bg-grayscaleborderdarker p-2 rounded-full"
              />
              <img
                src={twitter}
                className=" bg-grayscaleborderdarker p-2 rounded-full"
              />
              <img
                src={linkedin}
                className=" bg-grayscaleborderdarker p-2 rounded-full"
              />
            </div>
            {/*  */}
            <h1 className=" text-white text-2xl font-bold mb-2">SHEDA MART</h1>
            <p className="text-white text-xs ">
              © 2023-2024 Sheda Mart. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
