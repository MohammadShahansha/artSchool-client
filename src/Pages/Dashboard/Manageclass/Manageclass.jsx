import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Fade, Zoom } from "react-awesome-reveal";
import useClass from "../../../Hooks/useClass";

const Manageclass = () => {
  const [managclass, setManageclass] = useState([]);
  const [loading, setLoading] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(AuthContext);
  const [, refetch] = useClass();

  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/addedclass")
      .then((res) => res.json())
      .then((data) => {
        setManageclass(data);
        setLoading(false);
      });
  }, []);
  // console.log(managclass)
  const handelAprovedClass = (item) => {
    const { email, image, instructorName, name, price, seats } = item;
    if (user && user.email) {
      // console.log(classe)
      fetch(
        `https://assignment-twelve-server-zeta.vercel.app/added/approve/${item._id}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            refetch();
          }
        });
      const savedItem = {
        image,
        instructor: instructorName,
        name,
        price,
        seatsAvailable: seats,
        email,
        students: 0,
        status: "approved",
      };
      fetch("https://assignment-twelve-server-zeta.vercel.app/classes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setDisabled(true);
            Swal.fire("Successfully Added in Classes Page and updated status");
          }
        });
    }
  };
  const handelDenyClass = (item) => {
    if (user && user.email) {
      fetch(
        `https://assignment-twelve-server-zeta.vercel.app/added/deny/${item._id}`,
        {
          method: "PATCH",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            refetch();
            Swal.fire("Successfully deny, updated status and added a feedback");
          }
        });
    }
  };
  return (
    <div className="text-[#4a4c4b]">
      <h2 className="text-3xl md:text-4xl text-center font-semibold text-[#4a4c4b] my-5">
        Manage Class
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-2">
        {managclass.map((item) => (
          <div key={item._id} className="">
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <Zoom delay={1000} duration={1000}>
                  <img className="h-[250px]" src={item.image} alt="Art image" />
                </Zoom>
              </figure>
              <div className=" flex justify-between p-3">
                <div>
                  <h2 className="card-title">{item.name}</h2>
                  <Fade cascade>
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold">Instructor:</h2>
                      <p>{item.instructorName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold">Email:</h2>
                      <p>{item.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold">Seats:</h2>
                      <p>{item.seats}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold">Price:</h2>
                      <p>{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold">Status:</h2>
                      <p>{item.status}</p>
                    </div>
                  </Fade>
                </div>
                <div className="flex items-end">
                  <div className="flex flex-col items-end gap-2">
                    <button
                      disabled={!(item.status === "pending")}
                      onClick={() => handelAprovedClass(item)}
                      className="btn btn-primary btn-sm"
                    >
                      Approved
                    </button>
                    <button
                      disabled={!(item.status === "pending")}
                      onClick={() => handelDenyClass(item)}
                      className="btn btn-primary btn-sm"
                    >
                      Deny
                    </button>
                    {/* <button className='btn btn-primary btn-sm'>Feedback</button> */}
                    {/* disabled={item.status === 'approved' || item.status === 'deny'} */}
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

export default Manageclass;
