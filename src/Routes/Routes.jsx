import {
  createBrowserRouter
} from "react-router-dom";
import DashBoard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllUser from "../Pages/Admin/AllUsers/AllUser";
import ManageClasses from "../Pages/Admin/ManageClasses/ManageClasses";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Myclass from "../Pages/Myclass/Myclass";
import Payment from "../Pages/Myclass/Payment/Payment";
import Myenrolled from "../Pages/Myenrolled/Myenrolled";
import PaymentHistory from "../Pages/PaymentHistory/PaymentHistory";
import Register from "../Pages/Register/Register";
import AddClass from "../Pages/Teacher/AddClass/AddClass";
import TeacherClass from "../Pages/Teacher/TeachersClass/TeacherClass";
import UpdatePage from "../Pages/Teacher/UpdatePage/UpdatePage";
import AdminRoute from "./AdminRoute";
import TeacherRoute from "./TeacherRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'register',
            element:<Register></Register>
        },
        {
            path:'classes',
            element:<AllClasses></AllClasses>,
        },
        {
          path:'instructors',
          element:<AllInstructors></AllInstructors>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<><DashBoard></DashBoard></>,
      children:[
        {
          path:'myclass',
          element:<Myclass></Myclass>
        },
        {
          path:'myenrolled',
          element:<Myenrolled></Myenrolled>
        },
        {
          path:'payhistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'payment',
          element:<Payment></Payment>,
        },
        // admin
        {
          path:'allusers',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path:'manageclass',
          element:<AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        // teacher routes
        {
          path:'addclass',
          element:<TeacherRoute><AddClass></AddClass></TeacherRoute>,
        },
        {
          path:'teacherclass',
          element:<TeacherRoute><TeacherClass></TeacherClass></TeacherRoute>
        },
        {
          path:'updateclass',
          element:<UpdatePage></UpdatePage>,
          
        }
      ]
    }
  ]);

  export default router;