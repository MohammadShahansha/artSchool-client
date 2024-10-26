import React from "react";
import Slider from "../Slider/Slider";
import PopulerClass from "../PopulerClass/PopulerClass";
import PopulerInstructor from "../PopulerInstructor/PopulerInstructor";
import ExtraSection from "../ExtraSection/ExtraSection";
import WhyWe from "../WhyWe/WhyWe";

const Home = () => {
  return (
    <div className="dark:bg-gray-900">
      <Slider></Slider>
      <PopulerClass></PopulerClass>
      <WhyWe></WhyWe>
      <PopulerInstructor></PopulerInstructor>

      <ExtraSection></ExtraSection>
    </div>
  );
};

export default Home;
