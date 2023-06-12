import {
  createBrowserRouter
} from "react-router-dom";
import DashBoard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AllClasses from "../Pages/AllClasses/AllClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Myclass from "../Pages/Myclass/Myclass";
import Register from "../Pages/Register/Register";

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
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'myclass',
          element:<Myclass></Myclass>
        }
      ]
    }
  ]);

  export default router;