import React from "react";
import {
    FaBook,
    FaEnvelope,
    FaHamburger,
    FaHome,
    FaList,
    FaMoneyCheck,
    FaShoppingCart,
    FaShopware,
    FaUsers,
    FaUtensils
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";


const DashBoard = () => {

    const [classes,refetch] = useCart();
  const admin = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full px-10 py-20">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-slate-300">
          {/* Sidebar content here */}

          {admin ? 
            <>
              <li>
                <NavLink to="/dashboard/admin">
                  <FaHome className="w-[24px] h-[18px]"></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/items">
                  <FaUtensils className="w-[24px] h-[18px]"></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList className="w-[24px] h-[18px]"></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <FaBook className="w-[24px] h-[18px]"></FaBook>
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers className="w-[24px] h-[18px]"></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
           : 
            <>
              <li>
                <NavLink to="/dashboard/payhistory">
                  <FaMoneyCheck className="w-[24px] h-[18px]"></FaMoneyCheck>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclass">
                  <FaShoppingCart className="w-[24px] h-[18px]"></FaShoppingCart>
                  My Class
                  <span className="badge badge-secondary">+{classes.length}</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledClass">
                  <FaShoppingCart className="w-[24px] h-[18px]"></FaShoppingCart>
                  My Enrolled Class
                  <span className="badge badge-secondary">+</span>
                </NavLink>
              </li>
            </>
          }
         
          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome className="w-[24px] h-[18px]"></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaHamburger className="w-[24px] h-[18px]"></FaHamburger>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShopware className="w-[24px] h-[18px]"></FaShopware>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaEnvelope className="w-[24px] h-[18px]"></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
