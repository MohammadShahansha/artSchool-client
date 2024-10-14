import React, { useContext } from "react";
import {
  FaHome,
  FaSchool,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FcManager } from "react-icons/fc";
import { MdClass } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useClass from "../Hooks/useClass";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const Dashboard = () => {
  const [selectedClass] = useClass();
  //TODO--------------------------------------------------------
  // const isAdmin = true;
  // const isInstructor = false;
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  // console.log(isInstructor)

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
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
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <h2 className="text-2xl font-semibold">Arts & Craft School</h2>

            {isAdmin ? (
              <>
                {/* <li><NavLink to="enrolled"><FaHome></FaHome> Admin Home</NavLink></li> */}
                <li>
                  <NavLink to="/dashboard/manageclass">
                    <MdClass></MdClass> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageusers">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {isInstructor ? (
                  <>
                    {/* <li><NavLink to="enrolled"><FaHome></FaHome> Instructor Home</NavLink></li> */}
                    <li>
                      <NavLink to="/dashboard/addclass">
                        <FaUtensils></FaUtensils> Add a Class
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/addedinstructor">
                        <FaUtensils></FaUtensils> My Class
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    {/* <li><NavLink to="enrolled"><GiConfirmed></GiConfirmed> My Enrolled class</NavLink></li> */}

                    <li>
                      <NavLink to="/dashboard/myclass">
                        <FaShoppingCart></FaShoppingCart> My Selected Class
                        <span className="badge badge-secondary">
                          +{selectedClass?.length || 0}
                        </span>
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            )}
            {/* <li><NavLink to="enrolled"><GiConfirmed></GiConfirmed> My Enrolled class</NavLink></li>
                        <li><NavLink to="/payment"><FaWallet></FaWallet> Payment</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/myclass"><FaShoppingCart></FaShoppingCart> My Selected Class
                                <span className="badge badge-secondary">+{selectedClass?.length || 0}</span>
                            </NavLink>

                        </li> */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaSchool></FaSchool> Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructor">
                <FcManager></FcManager> Instructor
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
