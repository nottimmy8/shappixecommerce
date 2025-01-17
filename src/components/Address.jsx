import React from "react";

const Address = () => {
  return (
    <div className="bg-graylight text-center py-10 px-4">
      <div className="max-w-xl mx-auto">
        {" "}
        <p className=" text-sm mb-4">
          Not a fan of junk mail? Neither are we. We promise to send you only
          the good stuff including a free coupon on your next purchase.{" "}
        </p>
        {/* Search Input */}
        <div className="rounded-lg  border border-grayserch flex items-center  w-full">
          <input
            className="bg-transparent p-2 w-full focus:outline-none text-grayscale"
            type="text"
            placeholder="Email address"
          />
          <p className=" text-sm text-white py-3 px-10 bg-secondary rounded-lg">
            Subscribe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
