import React from 'react';
import { FaHome, FaSchool, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { GiConfirmed } from "react-icons/gi";
import {  FcManager } from "react-icons/fc";
import { NavLink, Outlet } from 'react-router-dom';
import useClass from '../Hooks/useClass';

const Dashboard = () => {
    const [selectedClass] = useClass()

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <h2 className='text-2xl font-semibold'>Arts & Craft School</h2>
                        <li><NavLink to="enrolled"><GiConfirmed></GiConfirmed> My Enrolled class</NavLink></li>
                        <li><NavLink to="/payment"><FaWallet></FaWallet> Payment</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/myclass"><FaShoppingCart></FaShoppingCart> My Selected Class
                            <span className="badge badge-secondary">+{selectedClass?.length || 0}</span>
                            </NavLink>
                            
                            </li>
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to="/classes"><FaSchool></FaSchool> Classes</NavLink></li>
                        <li><NavLink to="/instructor"><FcManager></FcManager> Instructor</NavLink></li>
                       
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;