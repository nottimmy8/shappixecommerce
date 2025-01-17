import React from "react";
import img from "../materials/dealimg.png";

const Topdeals = () => {
  const deals = [
    {
      id: 1,
      description:
        "tees, dresses, shoes for all Sheda Tribe + more  clothing deals",
      Image: img,
      discount: "15% off",
    },
    {
      id: 2,
      description:
        "skin care consultation for all ShedaTribe  + more  beauty deals",
      Image: img,
      discount: "20% off",
    },
    {
      id: 3,
      description:
        " when you spend 100,000 on household essentials with ReniTrust ",
      Image: img,
      discount: "N10,000 GiftCard ",
    },
    {
      id: 4,
      description: "solar essentials for all ShedaTribe + more deals",
      Image: img,
      discount: "10% off",
    },
  ];
  return (
    <div className="mt-4 mb-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">Top Sheda Tribe Week Deals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center">
          {deals.map(({ id, description, Image, discount }) => (
            <div
              key={id}
              className="relative w-[260px] bg-greendeep h-[380px] px-4 py-6 flex flex-col items-center"
            >
              <div className="text-start">
                <h2 className="text-white font-bold text-3xl">{discount}</h2>
                <p className="text-white text-sm">{description}</p>
              </div>
              <div className=" flex justify-center items-center mt-4">
                <div className="  border-8 border-tertiary h-52 w-52 bg-white rounded-full"></div>
                <img src={Image} alt="" className="absolute bottom-0 z-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topdeals;
