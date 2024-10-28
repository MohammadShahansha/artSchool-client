import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const [isAdmin] = useAdmin();

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "hover:text-red-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "hover:text-red-300"
          }
        >
          Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructor"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "hover:text-red-300"
          }
        >
          Instructor
        </NavLink>
      </li>
      <li>
        {isAdmin ? (
          <>
            <NavLink
              to="/dashboard/admin"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : "hover:text-red-300"
              }
            >
              Dashboard
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/dashboard/student"
              className={({ isActive }) =>
                isActive ? "text-red-600 font-bold" : "hover:text-red-300"
              }
            >
              Dashboard
            </NavLink>
          </>
        )}
        {/* <NavLink
          to="/dashboard/dashboard-content"
          className={({ isActive }) =>
            isActive ? "text-red-600 font-bold" : "hover:text-red-300"
          }
        >
          Dashboard
        </NavLink> */}
      </li>
      {user ? (
        <>
          <button onClick={handelLogOut} className="btn btn-ghost">
            Logout
          </button>
          <img className="rounded-full w-10 h-10" src={user.photoURL} alt="" />
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className=" sticky top-0 z-10 w-full">
      <div className="navbar h-16 w-full opacity-90 text-white bg-black px-20">
        <div className="navbar-start flex-grow">
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
              className="menu menu-sm dropdown-content mt-3 p-2 font-semibold text-white bg-black rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            Arts & Craft School
          </a>
        </div>
        <div className="navbar-center hidden lg:flex flex-grow justify-end">
          <ul className="menu menu-horizontal text-white font-semibold text-xl px-1">
            {navItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
