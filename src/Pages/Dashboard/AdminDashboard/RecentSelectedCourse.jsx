import React, { useEffect, useState } from "react";

const RecentSelectedCourse = () => {
  const [selectedClass, setSelectedClass] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/totalSelectedClass")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setSelectedClass(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  console.log(selectedClass);

  return (
    <div className="mt-10 w-[300px] md:w-[1000px] lg:[1200px]">
      <h2 className="text-2xl font-semibold pb-3 text-[#4a4c4b] ">
        Recent Selected Course
      </h2>
      <div className="overflow-x-auto sm:[300px] md:w-[1050px] lg:[1200px]">
        <table className="table">
          {/* head */}
          <thead className="bg-[#f4f6f8]">
            <tr className="text-lg font-normal text-[#4a4c4b] ">
              <th>Course</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Seat</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {selectedClass
              ?.slice(selectedClass.length - 5)
              .map((item, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={item.image} alt="Course image" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">
                          admitted {item.students} students
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold"> {item.instructor}</div>
                    {/* <div className="badge badge-ghost badge-sm">
                      {item.email}
                    </div> */}
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      {item.seatsAvailable}
                    </button>
                  </th>
                </tr>
              ))}
          </tbody>
          {/* foot */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default RecentSelectedCourse;
