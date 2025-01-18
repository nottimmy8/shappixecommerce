import React from "react";
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

const Shopcategories = () => {
  const categories = [
    { name: "Jewellery", image: image1 },
    { name: "Accessories", image: image2 },
    { name: "Beauty & Self Care", image: image2 },
    { name: "Arts & Collectibles", image: image3 },
    { name: "Home & Office", image: image4 },
    { name: "Computing & Gadgets", image: image5 },
    { name: "Children", image: image6 },
    { name: "Back To School", image: image7 },
    { name: "Supermarket", image: image8 },
    { name: "Books", image: image9 },
    { name: "Our Services", image: image10 },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-16 sm:mt-20 py-1 mb-12">
      <div className=" text-center py-6">
        <h5 className=" text-xl underline">Sheda Mart / Shop</h5>
        <div className=" flex  md:flex-row flex-wrap justify-evenly items-center gap-4 mt-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border rounded-md h-60 w-44 shadow hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-[200px] w-full object-cover  rounded-t-md"
              />
              <p className="mt-3 text-sm font-medium">{category.name}</p>
            </div>
          ))}
        </div>
        {/* <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.slice(6).map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center border h-60 w-44  rounded-md  shadow hover:shadow-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-48 w-full object-cover rounded-md"
              />
              <p className="mt-3 text-sm font-medium">{category.name}</p>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Shopcategories;
