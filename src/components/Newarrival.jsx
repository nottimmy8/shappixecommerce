import React from "react";

import Newarrivaldata from "../constants/Newarrivaldata";

const Newarrival = () => {
  return (
    <div className="mb-28">
      <div className="max-w-6xl mx-auto text-center p-2">
        <h3 className="sm:text-3xl font-bold mb-6">New Arrival</h3>

        <Newarrivaldata />
      </div>
    </div>
  );
};

export default Newarrival;
