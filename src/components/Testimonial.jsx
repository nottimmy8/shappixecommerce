import React from "react";
import Image from "../materials/framee.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="  hidden md:block bg-white rounded-full right-0 top-1/2 absolute opacity-50 hover:opacity-100 z-10 cursor-pointer  group"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="  hidden md:block bg-white rounded-full left-0 top-1/2 absolute opacity-50 hover:opacity-100 z-10 cursor-pointer group"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const folder = [
    { id: 1, img: Image },
    { id: 2, img: Image },
    { id: 3, img: Image },
    { id: 4, img: Image },
    { id: 5, img: Image },
    { id: 6, img: Image },
    { id: 7, img: Image },
    { id: 8, img: Image },
  ];
  return (
    <div className=" mt-14 mb-20">
      <div className=" text-center max-w-6xl mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold mb-4">
          Tag @Shedamart to share your Sheda style
        </h1>
        <div className="w-full ">
          <Slider {...settings}>
            {folder.map(({ id, img }) => (
              <div
                key={id}
                className="  mr-4 max-w-[300px] h-[300px] rounded-lg "
              >
                <div className=" mr-4">
                  {" "}
                  <img
                    src={img}
                    alt=""
                    className="w-[300px] object-cover h-[300px] rounded-lg "
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
