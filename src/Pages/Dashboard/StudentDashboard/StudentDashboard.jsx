import React from "react";
import Summary from "../AdminDashboard/Summary";
import RecentSelectedCourse from "../AdminDashboard/RecentSelectedCourse";
import PopulerInstructoAndCourse from "./PopulerInstructoAndCourse";

const StudentDashboard = () => {
  return (
    <div className="mt-14">
      <Summary />

      <PopulerInstructoAndCourse />
      <RecentSelectedCourse />
    </div>
  );
};

export default StudentDashboard;
