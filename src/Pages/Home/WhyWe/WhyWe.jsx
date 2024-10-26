import React from "react";
import { IoArrowRedoSharp } from "react-icons/io5";
import art2 from "../../../assets/Home/art2.png";

const WhyWe = () => {
  return (
    <section className="md:flex  items-center px-5 gap-5 my-20">
      <div className="md:block hidden md:w-[700px]">
        <img src={art2} alt="Why us" className="rounded-[50%]" />
      </div>
      <div>
        <h2 className="text-4xl font-bold text-black text-center mb-16">
          Why Choose Us
        </h2>
        <div>
          <h1 className="text-3xl font-bold text-black">Discover Us</h1>
          <p className="text-lg font-normal text-slate-400 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut
            delectus itaque optio accusamus est dolores incidunt non aspernatur
            nisi.
          </p>
          <div>
            <div className="flex items-center gap-2">
              <IoArrowRedoSharp className="text-2xl" />
              <h3 className="font-semibold text-2xl text-black">
                Experienced and Passionate Instructors
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <IoArrowRedoSharp className="text-2xl" />
              <h3 className="font-semibold text-2xl text-black">
                Comprehensive and Innovative Programs
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <IoArrowRedoSharp className="text-2xl" />
              <h3 className="font-semibold text-2xl text-black">
                State-of-the-Art Facilities & Resources
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <IoArrowRedoSharp className="text-2xl" />
              <h3 className="font-semibold text-2xl text-black">
                Hands-On Learning Experience
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
