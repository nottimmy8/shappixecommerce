import React from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import NavItems from "../Data/Navitems";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsCartDash } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl  mx-auto">
        <div className="flex justify-between items-center px-5 py-5 mx-auto sm:px-12 ">
          {/* toggleMenu */}
          <div className="flex md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <IoClose size={25} className="cursor-pointer sm:hidden" />
            ) : (
              <IoMenu size={25} className="cursor-pointer sm:hidden" />
            )}
          </div>
          {/* LOGO  */}
          <div>
            {" "}
            <h1 className="font-bold text-2xl ">SAPPHIX</h1>
          </div>

          {/* NAVLISTITEMS  */}
          <div className="hidden sm:flex">
            <NavItems />
          </div>

          {/* Search Input */}
          <div className="rounded-md  border border-black hidden items-center px-2 w-[300px]  sm:flex">
            <input
              className="bg-transparent p-2 w-full focus:outline-none text-black"
              type="text"
              placeholder="Search "
            />
            <IoMdSearch size={25} className="text-black" />
          </div>

          {/* right side */}
          <div className=" flex space-x-4">
            {/* profile */}
            <div className=" flex">
              <CgProfile size={25} className="text-black" />
              <div className=" hidden sm:block">Account</div>
            </div>

            {/* cart */}
            <div className="  flex">
              <div className="relative group block">
                <BsCartDash size={25} />

                <span className=" px-2    text-sm text-white rounded-full bg-red-600 absolute -right-3 -top-3  ">
                  0
                </span>
              </div>
              <div className=" hidden sm:block">Cart</div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className="absolute left-0 right-0 bg-gray-900 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block"
        style={{
          display: isOpen ? "block" : "none",
          height: "50vh",
          width: "100vw",
        }}
      >
        <div>
          {" "}
          <NavItems onClick={closeMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
