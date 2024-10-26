import React from "react";
import { useLocation } from "react-router-dom";

const DetailClass = () => {
  const location = useLocation();
  console.log(location);
  const { singleClass } = location.state || {};
  console.log(singleClass);
  return (
    <div className="md:mt-32 md:mx-20">
      <div className="card items-center lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={singleClass?.image}
            alt="Album"
            className="w-[500px] md:h-[300px]"
          />
        </figure>

        <div className="flex justify-between gap-5 p-5">
          <div className="">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Course Name:</h2>
              <p>{singleClass.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Course Price:</h2>
              <p>{singleClass.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Available Seat:</h2>
              <p>{singleClass.seatsAvailable}</p>
            </div>
            <marquee className="my-5 font-semibold text-2xl ">
              <h2>to join please select &</h2>
              <h2>pay immediately</h2>
            </marquee>
            <div>
              <button
                // disabled={user?.role === "instructor" || user?.role === "admin"}
                // onClick={() => handelSelectedItem(classe)}
                className="btn bg-[#062d50] text-white hover:bg-[#2046e0]"
              >
                Select
              </button>
            </div>
          </div>
          <div class="border-l border-gray-300"></div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Instructor Name:</h2>
              <p>{singleClass.instructor}</p>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Email:</h2>
              <p>{singleClass.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailClass;
