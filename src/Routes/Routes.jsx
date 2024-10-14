import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import ManageUsers from "../Pages/Dashboard/MangeUsers/ManageUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AddedByInstructor from "../Pages/Dashboard/AddedByInstructor/AddedByInstructor";
import Manageclass from "../Pages/Dashboard/Manageclass/Manageclass";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UpdateModal from "../Components/UpdateModal";
import UpdateClass from "../Components/UpdateModal";
import DashboardContent from "../Pages/Dashboard/DashboardContent/DashboardContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructor",
        element: <Instructor></Instructor>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myclass",
        element: <MyClass></MyClass>,
      },
      {
        path: "manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
      {
        path: "addedinstructor",
        element: <AddedByInstructor></AddedByInstructor>,
      },
      {
        path: "manageclass",
        element: <Manageclass></Manageclass>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "update",
        element: <UpdateClass />,
      },
      {
        path: "dashboard-content",
        element: <DashboardContent></DashboardContent>,
      },
    ],
  },
]);
