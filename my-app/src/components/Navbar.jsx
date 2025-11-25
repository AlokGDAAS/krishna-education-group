import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LuSquareMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { RiMenuFill } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const closeMenu = () => setIsMenu(false);

  return (
    <div className="bg-white rounded-lg shadow-lg mb-2 ">
      <div className="md:max-w-[90vw]  md:flex md:justify-between items-center md:mx-auto px-2 md:px-0 py-2">
        <div className="flex items-center justify-between">
          <div>
            <img
              src="./logo_1.jpg"
              alt=""
              className="w-10 md:w-15 bg-white/50 rounded-full  "
            />
          </div>
          <div>
          <p className="font-bold text-lg md:text-xl text-center md:text-start text-slate-600">
            Krishna Education Group
          </p>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Empowering Students. Transforming Futures.
          </p>


          </div>

          <div className="md:hidden text-3xl text-white pr-4"></div>
          <div
            onClick={() => setIsMenu((prev) => !prev)}
            className="md:hidden cursor-pointer z-50 border rounded p-1  text-slate-600"
          >
            {isMenu ? <IoClose size={20} /> : <RiMenuFill size={20} />}
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
            <Link to="vedio-lec">
              <li>Vedio-Lecture</li>
            </Link>
            <Link to="upcoming-exams">
              <li>Upcoming-Examination</li>
            </Link>
            <Link to="practice-test">
              <li>Practice-test</li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenu && (
        <div className="absolute top-[9vh] right-0 w-3/5 bg-[#17192eff]/95 p-6 flex flex-col gap-5 md:hidden z-40 rounded-lg shadow-lg text-sm">
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
            to="vedio-lec"
            onClick={closeMenu}
            className="cursor-pointer m-link"
          >
            Vedio lectures
          </Link>
          <Link
            to="upcoming-exams"
            onClick={closeMenu}
            className="cursor-pointer m-link"
          >
            Upcoming-Examination
          </Link>
          <Link
            to="practice-test"
            onClick={closeMenu}
            className="cursor-pointer m-link"
          >
            Practice-test
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
