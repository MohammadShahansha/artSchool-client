import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PopulerClass = () => {
  const [populerclass, setPopulerClass] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => {
        setPopulerClass(data);
        setLoading(false);
      });
  }, []);
  // console.log(populerclass)
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
          }
        });
    } else {
      Swal.fire("Please Login to select!!");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="mb-20">
      <h2 className="text-5xl text-center font-semibold my-5">
        Populer Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:ml-20">
        {populerclass.slice(0, 6).map((classe) => (
          <div key={classe._id}>
            <div className=" p-2 card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  className="md:h-[300px]"
                  src={classe.image}
                  alt="Art Image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{classe.name}</h2>
                <p>Instructo: {classe.instructor}</p>
                <p>Student: {classe.students}</p>
                <p>Available seats: {classe.seatsAvailable}</p>
                <p>Price: {classe.price}</p>
                <div className="flex justify-end">
                  <button
                    disabled={
                      user?.role === "instructor" || user?.role === "admin"
                    }
                    onClick={() => handelSelectedItem(classe)}
                    className="btn btn-primary"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerClass;
