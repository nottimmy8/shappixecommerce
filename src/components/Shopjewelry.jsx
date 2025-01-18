import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import image1 from "../materials/shopimg1.png";
import image2 from "../materials/shopimg2.png";
import image3 from "../materials/shopimg3.png";
import image4 from "../materials/shopimg4.png";
import image5 from "../materials/shopimg5.png";
import image6 from "../materials/shopimg6.png";
import image7 from "../materials/shopimg7.png";
import image8 from "../materials/shopimg8.png";
import image9 from "../materials/shopimg9.png";
import image10 from "../materials/shopimg10.png";

const Shopjewelry = () => {
  const categories = [
    { name: "Jewellery", image: image1, price: "$5,500" },
    { name: "Accessories", image: image2, price: "$5,500" },
    { name: "Beauty & Self Care", image: image2, price: "$5,500" },
    { name: "Arts & Collectibles", image: image3, price: "$5,500" },
    { name: "Home & Office", image: image4, price: "$5,500" },
    { name: "Computing & Gadgets", image: image5, price: "$5,500" },
    { name: "Children", image: image6, price: "$5,500" },
    { name: "Back To School", image: image7, price: "$5,500" },
    { name: "Supermarket", image: image8, price: "$5,500" },
    { name: "Books", image: image9, price: "$5,500" },
    { name: "Our Services", image: image10, price: "$5,500" },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-16 sm:mt-20 py-1 mb-12 ">
      <div className=" text-start py-6">
        {" "}
        <p className=" text-xs flex items-center gap-1">
          Sapphix <IoIosArrowForward size={20} />{" "}
          <span className="flex items-center gap-1 ">
            Shop <IoIosArrowForward size={20} />
          </span>
          <span className="flex items-center gap-1  ">
            Jewellry <IoIosArrowForward size={20} />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {categories.slice(0, 6).map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border rounded-md  h-60 w-44 shadow hover:shadow-lg"
          >
            <img
              src={category.image}
              alt={category.name}
              className="h-[200px] w-full object-cover  rounded-t-md"
            />
            <p className="mt-2 text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.slice(0, 8).map((category, index) => (
          <div key={index} className="relative group ">
            <div className="transition-transform duration-300 group-hover:scale-110 flex flex-col items-start h-[294px] w-[270px] text-center border rounded-md  shadow hover:shadow-lg ">
              <img
                src={category.image}
                alt={category.name}
                className="h-[200px]  w-[270px] object-cover rounded-md "
              />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black font-medium px-4 py-2 rounded-md shadow hover:bg-gray-200">
                  Add to Cart
                </button>
              </div> */}

              <div className="p-2 text-start">
                <p className="mt-2 text-sm font-medium">{category.name}</p>
                <p>{category.price} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopjewelry;
