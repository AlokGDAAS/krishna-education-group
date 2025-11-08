import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LuSquareMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const closeMenu = () => setIsMenu(false);

  return (
    <div className="bg-[var(--primary)]">
      <div className="md:max-w-[90vw]  md:flex md:justify-between items-center md:mx-auto px-2 md:px-0">
        <div className="flex items-center justify-between">
          <div>
            <img
              src="./logo.png"
              alt=""
              className="w-20 md:w-30 bg-white/50 rounded-lg m-2"
            />
          </div>
          <p className="font-bold text-lg md:text-xl text-white text-center md:text-start">
            Krishna Education Group
          </p>
          <div className="md:hidden text-3xl text-white pr-4"></div>
          <div
            onClick={() => setIsMenu((prev) => !prev)}
            className="md:hidden cursor-pointer z-50 text-white"
          >
            {isMenu ? <IoClose size={30} /> : <LuSquareMenu size={30} />}
          </div>
        </div>

        <div className="hidden md:block">
          <ul className="flex gap-4 text-white font-semibold ">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
            <Link to="study-mat">
              <li>Study-Material</li>
            </Link>
            <Link to="up-ex">
              <li>Upcoming-Examination</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenu && (
        <div className="absolute top-[9vh] right-0 w-4/5 bg-[#17192eff] p-6 flex flex-col gap-5 md:hidden z-40 rounded-lg shadow-lg text-sm">
          <Link to="/" onClick={closeMenu} className="cursor-pointer m-link">
            Home
          </Link>
          <Link
            to="about"
            onClick={closeMenu}
            className="cursor-pointer m-link"
          >
           About
          </Link>
          <Link
            to="study-mat"
            onClick={closeMenu}
            className="cursor-pointer m-link"
          >
            Study-Material
          </Link>
          <Link
            to="up-ex"
            onClick={closeMenu}
            className="cursor-pointer m-link"
          >
            Upcoming-Examination
          </Link>

        </div>
      )}
    </div>
  );
};

export default Navbar;
