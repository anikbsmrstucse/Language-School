import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../../assets/Website_logo/logo-black.png';
import './Navbar.css';

const Navbar = () => {
  const user = true;
  // TODO: ADD funtionality in user login
  const menuBar = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/teacher'>Instructors</NavLink></li>
      <li><NavLink to='/courses'>Classes</NavLink></li>
      {
        user ? <><li><NavLink to='/dashboard'>Dashboard</NavLink></li></>:<li><NavLink to='/dashboard'></NavLink></li>
      }
    </>
  );
  return (
    <div className="drop-shadow-sm sticky top-0 z-10">
      <div>
      <nav className="navbar bg-base-100">
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
          {/* TODO: need to nav bar profile picture functional and logout and login functional */}
          {
            user ? <>
            <a><img src="https://picsum.photos/200" className="w-10 h-10 rounded-full" alt="" /></a>
            <a className="btn btn-outline normal-case btn-sm ml-5">Logout</a>
            </>
            :
            <><a className="btn btn-outline normal-case btn-sm">Login</a></>
          }
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
