import React, { useEffect, useState } from "react";

const Instructor = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/allinstructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5 md:mx-10">
      {instructors.map((instructor) => (
        <div key={instructor._id}>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[250px] w-full"
                src={instructor.instructorImage}
                alt="Instructor Image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.instructor}</h2>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">Instructo Email:</h2>
                <p>{instructor.email}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructor;
