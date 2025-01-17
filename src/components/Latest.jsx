import React from "react";
import img1 from "../materials/new1.png";
import img2 from "../materials/new2.png";
import img3 from "../materials/new3.png";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className=" hidden md:block  bg-white rounded-full right-0 top-1/2 absolute opacity-50 hover:opacity-100 z-10 cursor-pointer  group"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className=" hidden md:block  bg-white rounded-full left-0 top-1/2 absolute opacity-50 hover:opacity-100 z-10 cursor-pointer group"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

const Latest = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const newrelease = [
    {
      id: 1,
      name: "Tolu Ade For Sheda",
      description:
        "Explore new hair & skin care products with the founder as she tells us more about how she navigates a multi-faceted career with motherhood. ",
      Image: img1,
    },
    {
      id: 2,
      name: "Here Comes The Sun",
      description:
        "Explore new hair & skin care products with the founder as she tells us more about how she navigates a multi-faceted career with motherhood. ",
      Image: img2,
    },
    {
      id: 3,
      name: "Back To School ",
      description:
        "Explore new hair & skin care products with the founder as she tells us more about how she navigates a multi-faceted career with motherhood. ",
      Image: img1,
    },
    {
      id: 4,
      name: "Back To School ",
      description:
        "Explore new hair & skin care products with the founder as she tells us more about how she navigates a multi-faceted career with motherhood. ",
      Image: img3,
    },
  ];
  return (
    <div className="mt-14 mb-20">
      <div className="max-w-6xl mx-auto text-center ">
        <h1 className=" text-2xl font-bold mb-6">The Latest</h1>
        <div className=" w-full ">
          <Slider {...settings}>
            {newrelease.map(({ id, name, description, Image }) => (
              <div
                key={id}
                className="max-w-[350px] border border-gray-300 rounded-lg h-[500px] "
              >
                <img
                  src={Image}
                  alt={name}
                  className="object-cover w-[350px] h-[360px] rounded-t-lg"
                />

                <div className="p-2">
                  <h2 className="text-lg font-semibold">{name}</h2>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Latest;
