import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import useStudent from "../../../Hooks/useStudent";
import useTeacher from "../../../Hooks/useTeacher";
import logo from '../../../assets/Website_logo/logo-black.png';
import './Navbar.css';

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then(()=>{})
    .then(error => {
      console.log(error);
    })
  }

  // const [admin] = useAdmin();
  // const isAdmin = admin?.admin;
  
  // const [teacher] = useTeacher();
  // const isTeacher = teacher?.teacher;
  
  // const [student] = useStudent();
  // const isStudent = student?.student;

  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();
  const [isTeacher] = useTeacher();

  const menuBar = (
    <>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/instructors'>Instructors</NavLink></li>
      <li><NavLink to='/classes'>Classes</NavLink></li>
      {
        user && isStudent ? <li><NavLink to='/dashboard/myclass'>Dashboard</NavLink></li>:''
      }
      {
        user && isTeacher ? <li><NavLink to='/dashboard/teacherclass'>Dashboard</NavLink></li>:''
      }
      {
        user && isAdmin ? <li><NavLink to='/dashboard/allusers'>Dashboard</NavLink></li>:''
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
          {
            user ? <>
            <a><img src={user.photoURL} className="w-10 h-10 rounded-full" alt="" /></a>
            <a onClick={handleLogout} className="btn btn-outline normal-case btn-sm ml-5">Logout</a>
            </>
            :
            <li className="btn btn-outline normal-case btn-sm"><Link to='/login'>Login</Link></li>
          }
        </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;
