import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const AdmittedClassPerStudent = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user.email);
  const userEmail = user.email;
  console.log(userEmail);

  const [myClass, setMyClass] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://assignment-twelve-server-zeta.vercel.app/myAdmittedClass?userEmail=${userEmail}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setMyClass(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  console.log(myClass);
  return (
    <div className="px-2 md:px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {myClass.map((item, index) => (
          <div
            key={index}
            className="md:flex bg-[#f4f6f8] border-2 border-[#e4eaf0] rounded-2xl"
          >
            <figure>
              <img
                src={item?.image}
                alt="Course Image"
                className="w-full h-[250px] md:w-[250px] md:h-full rounded-s-md"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <h2 className="card-title">Instructor: {item.instructor}</h2>
              {/* <p>Click the button to watch on Jetflix app.</p> */}
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdmittedClassPerStudent;
