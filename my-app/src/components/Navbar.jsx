import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[var(--primary)]">
      <div className="max-w-[90vw]  md:flex md:justify-between items-center mx-auto">
        <div className="flex items-center">
          <div>
            <img src="./logo.png"  alt="" className="w-30 bg-white/50 rounded-lg m-2"/>
          </div>
          <p className="font-bold text-lg md:text-xl text-white text-center md:text-start">
            Krishna Education Group
          </p>
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
    </div>
  );
};

export default Navbar;
