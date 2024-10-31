import React, { useEffect, useState } from "react";

const PopulerInstructoAndCourse = () => {
  const [topInstructor, setTopInstructor] = useState([]);
  const [topCourses, setTopCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/allinstructor")
      .then((res) => res.json())
      .then((data) => {
        setTopInstructor(data);
        setLoading(false);
      });
  }, []);
  console.log(topInstructor);

  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setTopCourses(data);
        setLoading(false);
      });
  }, []);
  console.log(topCourses);
  return (
    <div className="md:flex justify-between">
      <div>
        <div className="mt-10 w-[300px] md:w-[500px] ">
          <h2 className="text-2xl font-semibold pb-3 text-[#4a4c4b] ">
            Our Top Instructors
          </h2>
          <div className="overflow-x-auto border-2 border-[#e4eaf0] rounded-2xl">
            <table className="table">
              {/* head */}
              <thead className="bg-[#f4f6f8]">
                <tr className="text-lg font-normal text-[#4a4c4b] ">
                  <th>image</th>
                  <th>name</th>
                  <th>email</th>
                </tr>
              </thead>
              <tbody>
                {topInstructor?.slice(0, 3).map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.instructorImage}
                              alt="Course image"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div> {item.instructor}</div>
                    </td>
                    <td>{item.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-10 w-[300px] md:w-[500px]">
          <h2 className="text-2xl font-semibold pb-3 text-[#4a4c4b] ">
            Our Top Courses
          </h2>
          <div className="overflow-x-auto border-2 border-[#e4eaf0] rounded-2xl">
            <table className="table">
              {/* head */}
              <thead className="bg-[#f4f6f8]">
                <tr className="text-lg font-normal text-[#4a4c4b] ">
                  <th>image</th>
                  <th>name</th>
                  <th>instructor</th>
                </tr>
              </thead>
              <tbody>
                {topCourses?.slice(0, 3).map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={item.image} alt="Course image" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div> {item.name}</div>
                    </td>
                    <td>{item.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopulerInstructoAndCourse;
