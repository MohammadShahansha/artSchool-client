import React, { useEffect, useState } from "react";

const PopulerInstructor = () => {
  const [populerInstructor, setPopulerInstructor] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/allinstructor")
      .then((res) => res.json())
      .then((data) => {
        setPopulerInstructor(data);
        setLoading(false);
      });
  }, []);
  // console.log(populerInstructor)
  return (
    <div className="md:mx-5">
      <h2 className="text-4xl text-center font-bold my-5">
        Populer Instructors
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {populerInstructor.slice(0, 4).map((pi) => (
          <div key={pi._id}>
            <div className=" card card-compact  bg-base-100 shadow-xl">
              <figure>
                <img
                  className="md:h-[250px]"
                  src={pi.instructorImage}
                  alt="Art Image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{pi.name}</h2>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold">Instructo:</h2>
                  <p>{pi.instructor}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold">Student:</h2>
                  <p> {pi.students}</p>
                </div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold">Email:</h2>
                  <p>{pi.email}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerInstructor;
