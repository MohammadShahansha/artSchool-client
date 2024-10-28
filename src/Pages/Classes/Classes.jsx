import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Classes = () => {
  const { user } = useContext(AuthContext);
  // console.log(user.role)
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/allclasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  // console.log(classes)
  const handelSelectedItem = (classe) => {
    const {
      email,
      image,
      instructor,
      name,
      price,
      seatsAvailable,
      students,
      _id,
    } = classe;
    if (user && user.email) {
      // console.log(classe)
      const selectedItem = {
        selectedItemId: _id,
        image,
        instructor,
        name,
        price,
        seatsAvailable,
        students,
        email: user.email,
      };
      fetch("https://assignment-twelve-server-zeta.vercel.app/selectedclass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire("Successfully Selected");
            navigate("/dashboard/myclass");
          }
        });
    } else {
      Swal.fire("Please Login to select!!");
      navigate("/login", { state: { from: location } });
    }
  };
  const handleDetails = (selectedClass) => {
    navigate("/detailsClass", { state: { singleClass: selectedClass } });
  };
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-5 mt-5">
      {classes.map((classe) => (
        <div key={classe._id}>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="h-[250px] w-full"
                src={classe.image}
                alt="Art Image"
              />
            </figure>
            <div className="card-body">
              <div className="flex justify-between">
                <div>
                  <h2 className="card-title">{classe.name}</h2>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold">Instructo: </h2>
                    <p> {classe.instructor}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold">Student:</h2>
                    <p>{classe.students}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold">Available seats:</h2>
                    <p>{classe.seatsAvailable}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold">Price:</h2>
                    <p>{classe.price}</p>
                  </div>
                </div>
                <div className="flex items-end">
                  <div className="flex flex-col gap-2">
                    <button
                      // disabled={
                      //   user?.role === "instructor" || user?.role === "admin"
                      // }
                      // to="/detailsClass"
                      onClick={() => handleDetails(classe)}
                      className="btn bg-[#2046e0] text-white hover:bg-[#062d50]"
                    >
                      Details
                    </button>
                    <button
                      // disabled={
                      //   user?.role === "instructor" || user?.role === "admin"
                      // }
                      onClick={() => handelSelectedItem(classe)}
                      className="btn bg-[#062d50] text-white hover:bg-[#2046e0]"
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
