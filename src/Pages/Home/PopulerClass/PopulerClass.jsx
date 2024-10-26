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
    <div className=" mb-10 md:mx-5">
      <h2 className="text-4xl text-center font-bold my-5">Populer Classes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-2 ">
        {populerclass.slice(0, 4).map((classe) => (
          <div key={classe._id} className="">
            <div className=" card card-compact w-full bg-base-100 shadow-xl">
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
                    <p>Instructo: {classe.instructor}</p>
                    <p>Student: {classe.students}</p>
                    <p>Available seats: {classe.seatsAvailable}</p>
                    <p>Price: {classe.price}</p>
                  </div>
                  <div className="flex items-end">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopulerClass;
