import React, { useContext } from "react";
import {
  FaHome,
  FaSchool,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useClass from "../Hooks/useClass";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { MdDashboard } from "react-icons/md";
import { MdPersonPin } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

const Dashboard = () => {
  const [selectedClass] = useClass();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

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
          <ul className="menu p-4 w-80 h-full bg-[#e4eaf0] text-[#4a4c4b]">
            {/* Sidebar content here */}
            <h2 className="text-2xl font-semibold">Arts & Craft School</h2>

            {isAdmin ? (
              <div className="font-medium text-lg">
                <li>
                  <NavLink to="/dashboard/admin">
                    <MdDashboard /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageusers">
                    <FaUsers></FaUsers> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addclass">
                    <FaUtensils></FaUtensils> Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageclass">
                    <MdManageSearch /> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addedinstructor">
                    <MdClass /> All Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/admitted-class">
                    <GiConfirmed /> Admitted Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/profile">
                    <MdPersonPin /> Profile
                  </NavLink>
                </li>
              </div>
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

                    <li className="font-medium text-lg">
                      <NavLink to="/dashboard/student">
                        <MdDashboard /> Dashboard
                      </NavLink>
                      <NavLink to="/dashboard/my-class">
                        <MdClass /> My Class
                      </NavLink>
                      <NavLink to="/dashboard/my-selected-class">
                        <FaShoppingCart></FaShoppingCart> My Selected Class
                        <span className="badge badge-secondary">
                          +{selectedClass?.length || 0}
                        </span>
                      </NavLink>
                      <NavLink to="/dashboard/profile" className="">
                        <MdPersonPin /> Profile
                      </NavLink>
                    </li>
                  </>
                )}
              </>
            )}

            <div className="divider h-1"></div>
            <li className="font-medium text-lg">
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li className="font-medium text-lg">
              <NavLink to="/classes">
                <FaSchool></FaSchool> Classes
              </NavLink>
            </li>
            <li className="font-medium text-lg">
              <NavLink to="/instructor">
                <MdPerson /> Instructor
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
