import React from "react";
import Google from "../materials/Google.png";

const Login = () => {
  return (
    <div className="w-full text-center h-screen flex flex-col justify-center items-center">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8  ">
        <h2 className=" font-bold text-4xl">Welcome to Sheda Mart</h2>
        <p className="text-base">
          Type your e-mail or phone number to log in or create a Sheda Mart
          account.
        </p>
        <input
          type="text"
          placeholder="Email or Mobile Number*"
          className=" text-base w-full  border-2 border-gray-300 p-2 mt-4"
        />
        <button className=" bg-secondary px-8 py-4 w-full rounded-lg text-white text-base mt-4">
          {" "}
          Continue
        </button>
        <p className="text-xs text-grayscaletext w-56 mt-4 mx-auto">
          By continuing, you agree to Sheda Mart's Conditions of Use and Privacy
          Notice.{" "}
          <span className=" text-xs text-secondary font-semibold">
            Terms and Conditions{" "}
          </span>
        </p>
        <div className="border border-secondary px-8 py-4 w-full  rounded-lg text-black text-base mt-4 mb-5">
          <span> Log in with Google</span>
        </div>
        <p className=" text-sm ">
          For further support you may visit the Help Centre or contact our
          customer service team.
        </p>
      </div>
    </div>
  );
};

export default Login;
