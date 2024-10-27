import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const DetailClass = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { singleClass } = location.state || {};
  console.log(singleClass);
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
  return (
    <div className="mt-5 md:mt-32 mx-5 md:mx-20">
      <div className="card md:gap-10 items-center lg:card-side bg-base-100 w-full shadow-xl">
        <figure className="md:w-5/12">
          <img
            src={singleClass?.image}
            alt="Album"
            className="md:w-full md:h-[300px]"
          />
        </figure>

        <div className=" md:flex justify-between md:gap-5 w-full  p-5">
          <div className="w-full">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Course:</h2>
              <p>{singleClass?.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Course Price:</h2>
              <p>{singleClass?.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Available Seat:</h2>
              <p>{singleClass?.seatsAvailable}</p>
            </div>
            <marquee className="my-5 font-semibold text-2xl ">
              <h2>to join please select &</h2>
              <h2>pay immediately</h2>
            </marquee>
            <div>
              <button
                // disabled={user?.role === "instructor" || user?.role === "admin"}
                onClick={() => handelSelectedItem(singleClass)}
                className="btn bg-[#2046e0] text-white hover:bg-[#062d50]"
              >
                Select
              </button>
            </div>
          </div>
          {/* <div class="border-l border-gray-300"></div> */}
          <div className=" w-full">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">Instructor Name:</h2>
                <p>{singleClass?.instructor}</p>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">Email:</h2>
                <p>{singleClass?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailClass;
