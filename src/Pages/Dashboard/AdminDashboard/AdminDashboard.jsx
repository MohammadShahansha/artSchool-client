import React from "react";
import Summary from "./Summary";
import RecentSelectedCourse from "./RecentSelectedCourse";
import PopulerInstructoAndCourse from "../StudentDashboard/PopulerInstructoAndCourse";
const AdminDashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-[#4a4c4b] my-5">Dashboard</h2>
      <Summary />
      <PopulerInstructoAndCourse />
      <RecentSelectedCourse />
    </div>
  );
};

export default AdminDashboard;
