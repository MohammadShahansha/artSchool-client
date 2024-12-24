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
            navigate("/dashboard/my-selected-class");
          }
        });
    } else {
      Swal.fire("Please Login to select!!");
      navigate("/login", { state: { from: location } });
    }
  };
  return (
    <div className="mt-5 md:mt-16">
      <div className="my-5 font-semibold text-2xl text-center">
        <h2>To Join Courses Please Select &</h2>
        <h2>Pay Immediately</h2>
      </div>
      <div className=" mx-5 md:mx-20 flex justify-center items-center">
        <div className="md:flex gap-32 items-center bg-[#f4f6f8] border-2 border-[#e4eaf0] rounded-2xl lg:card-side w-full md:w-[1000px] md:p-14 ">
          <div className="md:w-5/12">
            <img
              src={singleClass?.image}
              alt="Album"
              className="md:w-[400px] md:h-[300px] rounded-sm"
            />
          </div>

          <div className=" ">
            <div className="w-full text-lg">
              <div className="flex items-center gap-2 ">
                <h2 className="font-semibold">Course:</h2>
                <p>{singleClass?.name}</p>
              </div>
              <div className="flex items-center gap-2 my-2">
                <h2 className="font-semibold">Course Price:</h2>
                <p>{singleClass?.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">Available Seat:</h2>
                <p>{singleClass?.seatsAvailable}</p>
              </div>
              <div className="flex items-center gap-2 my-2">
                <h2 className="font-semibold">Instructor Name:</h2>
                <p>{singleClass?.instructor}</p>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="font-semibold">Email:</h2>
                <p>{singleClass?.email}</p>
              </div>

              <div className="md:mt-5">
                <button
                  // disabled={user?.role === "instructor" || user?.role === "admin"}
                  onClick={() => handelSelectedItem(singleClass)}
                  className="btn bg-[#2046e0] text-white hover:bg-[#062d50]"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {/* <div className=" w-full text-lg">
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
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailClass;
