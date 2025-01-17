import React from "react";
// import selection from "../constants/selection";
import Image from "../materials/topselect1.png";
import Image2 from "../materials/topselect2.png";
import Image3 from "../materials/topselect3.png";
import Image4 from "../materials/topselect4.png";

const Topselect = () => {
  const selection = [
    {
      id: 1,
      href: "#Jewellery",
      name: "Jewellery",
      Image: Image,
    },
    { id: 2, href: "#Décor", name: "Décor", Image: Image2 },
    {
      id: 3,
      href: "#Storage",
      name: "Storage",
      Image: Image3,
    },
    {
      id: 4,
      href: "#School Essentials",
      name: "School Essentials",
      Image: Image4,
    },
  ];

  return (
    <div className=" container mx-auto mb-32">
      <div className=" max-w-6xl p-12 mx-auto bg-bluelight rounded-md ">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" md:text-3xl text-base font-bold">
            Top selection for today
          </h1>
          {/* categories */}
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 mt-6  ">
            {selection.map(({ id, name, Image }) => (
              <div key={id} className=" rounded-2xl shadow-md ">
                <div className="w-[276px] h-[260px] sm:w-[210px] sm:h-[200px] rounded-2xl bg-slate-400 ">
                  <img
                    src={Image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className=" bg-white  p-5 text-center rounded-b-2xl">
                  <h2 className="text-base sm:text-sm font-semibold ">
                    {name}{" "}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topselect;
