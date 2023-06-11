import React from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaLinkedin,
    FaPhone,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/Website_logo/logo-black.png';
import './Navbar.css';

const Navbar = () => {
  const menuBar = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/teacher'>Teachers</NavLink></li>
      <li><NavLink to='/courses'>Courses</NavLink></li>
    </>
  );
  return (
    <div className="drop-shadow-sm">
      <div className="md:h-[40px] h-[70px] w-full md:gap-0 gap-1 bg-[#3b3b3b] flex md:flex-row flex-col items-center px-5 flex-wrap md:pt-0 pt-2">
        <div className="text-[#acaaaa] flex md:gap-3 gap-1 flex-row md:flex-grow md:mt-0 mt-5">
          <FaFacebook />
          <FaYoutube /> <FaLinkedin /> <FaTwitter />
        </div>
        <div className="text-[#acaaaa] flex md:gap-3 flex-col md:flex-row items-center text-sm md:mr-7">
          {" "}
          <div className="flex md:gap-2 items-center">
            <FaPhone></FaPhone>+228 872 4444
          </div>{" "}
          <div className="flex gap-2 items-center">
            <FaPhone />
            +775 872 4444
          </div>{" "}
          <div className="flex gap-2 items-center">
            <FaEnvelope />
            contact@email.com
          </div>
        </div>
        <div>
          <select className="select select-bordered-0 rounded-none border-0   select-sm w-[90px] bg-[#3b3b3b] max-w-xs text-[#acaaaa] md:mt-0 mt-4">
            <option selected className="text-sm">White</option>
            <option className="text-sm">Dark</option>
          </select>
        </div>
      </div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                {menuBar}
            </ul>
          </div>
          <a >
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuBar}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline normal-case btn-sm">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
