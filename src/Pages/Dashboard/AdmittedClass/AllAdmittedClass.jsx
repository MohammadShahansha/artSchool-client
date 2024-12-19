import React, { useEffect, useState } from "react";

const AllAdmittedClass = () => {
  const [admittedClass, setAdmittedClass] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/allAdmittedClass")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setAdmittedClass(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  //   console.log(admittedClass);
  return (
    <div className="mt-10 w-[300px] md:w-[1000px] lg:[1200px]">
      <h2 className="text-2xl font-semibold pb-3 text-[#4a4c4b] ">
        Admitted Courses
      </h2>
      <div className="overflow-x-auto w-[300px] md:w-[1000px] lg:[1200px]">
        <table className="table">
          {/* head */}
          <thead className="border-2 bg-[#f4f6f8] border-[#e4eaf0] rounded-2xl">
            <tr className="text-lg font-normal text-[#4a4c4b] ">
              <th>Course</th>
              <th>Instructor</th>
              <th>Price</th>
              <th>Studen Email</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {admittedClass.map((item, index) => (
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
                  <div className="badge badge-ghost badge-sm">{item.email}</div>
                </td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    {item.userEmail}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAdmittedClass;
