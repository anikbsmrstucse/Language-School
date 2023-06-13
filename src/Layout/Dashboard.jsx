import React from "react";
import {
  FaBook,
  FaEnvelope,
  FaHamburger,
  FaHome,
  FaMoneyCheck,
  FaShoppingCart,
  FaUsers
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";
import useStudent from "../Hooks/useStudent";
import useTeacher from "../Hooks/useTeacher";

const DashBoard = () => {
  const [classes, refetch] = useCart();
  refetch();
  
  const [admin] = useAdmin();
  const isAdmin = admin?.admin;
  
  const [teacher] = useTeacher();
  const isTeacher = teacher?.teacher;
  
  const [student] = useStudent();
  const isStudent = student?.student;
  
  
  return (
    <div className="drawer lg:drawer-open sticky top-0">
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

          {isAdmin === true ? (
            <>
              <li>
                <NavLink to="/dashboard/manageclass">
                  <FaBook className="w-[24px] h-[18px]"></FaBook>
                  Manage Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers className="w-[24px] h-[18px]"></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
          {isStudent === true ? (
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
                  <span className="badge badge-secondary">
                    +{classes.length}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myenrolled">
                  <FaShoppingCart className="w-[24px] h-[18px]"></FaShoppingCart>
                  My Enrolled Class
                  <span className="badge badge-secondary">+</span>
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
          
          {isTeacher === true ? (
            <>
              <li>
                <NavLink to="/dashboard/teacherClass">
                  <FaShoppingCart className="w-[24px] h-[18px]"></FaShoppingCart>
                  My Class
                  <span className="badge badge-secondary">+</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addclass">
                  <FaShoppingCart className="w-[24px] h-[18px]"></FaShoppingCart>
                  Add Class
                  <span className="badge badge-secondary">+</span>
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}

          <div className="divider"></div>

          <li>
            <NavLink to="/">
              <FaHome className="w-[24px] h-[18px]"></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <FaHamburger className="w-[24px] h-[18px]"></FaHamburger>
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaEnvelope className="w-[24px] h-[18px]"></FaEnvelope>
              Instructors
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
