import React from "react";
import {
  FaBook,
  FaBookMedical,
  FaHome,
  FaListAlt,
  FaMoneyCheck,
  FaUser,
  FaUsers
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useCart from "../Hooks/useCart";
import useEnrolled from "../Hooks/useEnrolled";
import useStudent from "../Hooks/useStudent";
import useTeacher from "../Hooks/useTeacher";
import logo from '../assets/Website_logo/logo-black.png';

const DashBoard = () => {
  const [classes, refetch] = useCart();
  const [enroll] = useEnrolled();
  refetch();


  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();
  const [isTeacher] = useTeacher();
  
  
  return (
    <div className="drawer lg:drawer-open sticky top-0">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full px-10 py-10">
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
          <img className="mb-2" src={logo} alt="" />

          {isAdmin ? (
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
          {isStudent ? (
            <>
              <li>
                <NavLink to="/dashboard/payhistory">
                  <FaMoneyCheck className="w-[24px] h-[18px]"></FaMoneyCheck>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myclass">
                  <FaListAlt className="w-[24px] h-[18px]"></FaListAlt>
                  My Selected Class
                  <span className="badge badge-secondary">
                    +{classes?.length}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myenrolled">
                  <FaBook className="w-[24px] h-[18px]"></FaBook>
                  My Enroll Class
                  <span className="badge badge-secondary">+{enroll.length}</span>
                </NavLink>
              </li>
            </>
          ) : (
            ""
          )}
          
          {isTeacher ? (
            <>
              <li>
                <NavLink to="/dashboard/teacherClass">
                  <FaListAlt className="w-[24px] h-[18px]"></FaListAlt>
                  My Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addclass">
                  <FaBookMedical className="w-[24px] h-[18px]"></FaBookMedical>
                  Add Class
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
              <FaListAlt className="w-[24px] h-[18px]"></FaListAlt>
              Classes
            </NavLink>
          </li>
          <li>
            <NavLink to="/instructors">
              <FaUser className="w-[24px] h-[18px]"></FaUser>
              Instructors
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
