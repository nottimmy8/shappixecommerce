import React from "react";
import Slider from "react-slick";
import img from "../materials/arrival1.png";
import img2 from "../materials/arrival22.png";
import img3 from "../materials/arrival2.png"; // Replace with actual image paths
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className=" hidden md:block  bg-white rounded-full right-0 top-1/3 absolute opacity-50 hover:opacity-100 z-10 cursor-pointer  group"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className=" hidden md:block  bg-white rounded-full left-0 top-1/3 absolute opacity-50 hover:opacity-100 z-10 cursor-pointer group"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

const Newarrivaldata = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const latest = [
    {
      id: 1,
      description: "Rounded Sunglasses",
      Image: img,
      price: "$100",
      discount: "$25000.00 (10% off)",
    },
    {
      id: 2,
      description: "Rounded Sunglasses",
      Image: img2,
      price: "$100",
      discount: "$25000.00 (10% off)",
    },
    {
      id: 3,
      description: "Rounded Sunglasses",
      Image: img3,
      price: "$100",
      discount: "$25000.00 (10% off)",
    },
    {
      id: 4,
      description: "Rounded Sunglasses",
      Image: img,
      price: "$100",
      discount: "$25000.00 (10% off)",
    },
    {
      id: 5,
      description: "Rounded Sunglasses",
      Image: img3,
      price: "$100",
      discount: "$25000.00 (10% off)",
    },
    {
      id: 6,
      description: "Rounded Sunglasses",
      Image: img2,
      price: "$100",
      discount: "$25000.00 (10% off)",
    },
    // Add more items as needed
  ];

  return (
    <div className="max-w-6xl mx-auto text-center">
      <div className="w-full">
        <Slider {...settings}>
          {latest.map(({ id, description, Image, price, discount }) => (
            <div
              key={id}
              className="max-w-[180px] h-[300px] rounded-t-md text-start"
            >
              <img
                src={Image}
                alt={description}
                className="w-[180px] h-[200px] object-cover rounded-t-md"
              />
              <div className=" text-start p-2 ">
                <p className=" text-sm text-grayscaletext">{description}</p>
                <p className=" text-base">{price}</p>
                {discount && (
                  <p className="text-grayscaletext text-xs">{discount}</p>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Newarrivaldata;
