import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Secret/Secret";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        {
          path: '/instructor',
          element: <Instructor></Instructor>
        }

      ]
    },
  ]);