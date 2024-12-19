import React, { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, image, instructorName, name, price, seats, status } = data;
    if (user && user.email) {
      // console.log(classe)
      const savedClass = {
        email,
        image,
        instructorName,
        name,
        price,
        seats,
        status,
      };
      fetch("https://assignment-twelve-server-zeta.vercel.app/addedclass", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire("Successfully Added");
          }
        });
    }
  };
  console.log(errors);
  return (
    <div className="w-full md:ms-10 rounded-md">
      <Zoom delay={1000} duration={1000}>
        <div className=" bg-[#f4f6f8] min-h-screen px-10 rounded-md md:my-5">
          <h2 className="text-3xl md:text-4xl font-semibold text-center py-5 text-[#4a4c4b] ">
            Add a Class
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-5 ">
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-[#4a4c4b] text-base">
                    Class Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Class Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-[#4a4c4b] text-base">
                    Class Image
                  </span>
                </label>
                {/* <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " /> */}

                <input
                  type="text"
                  {...register("image", { required: true })}
                  placeholder="image"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="md:flex gap-5 my-0 md:my-3">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-[#4a4c4b] text-base">
                    Instructor Name
                  </span>
                </label>
                <input
                  type="text"
                  // defaultValue={user?.displayName}
                  {...register("instructorName", { required: true })}
                  placeholder="Instructor Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-[#4a4c4b] text-base">
                    Instructor Email
                  </span>
                </label>
                <input
                  type="email"
                  // defaultValue={user?.email}
                  {...register("email", { required: true })}
                  placeholder="Instructor email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-[#4a4c4b] text-base">
                    Available Seats
                  </span>
                </label>
                <input
                  type="number"
                  {...register("seats", { required: true })}
                  placeholder="Available Seats"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-semibold text-[#4a4c4b] text-base">
                    Price
                  </span>
                </label>
                <input
                  type="number"
                  {...register("price", { required: true })}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control md:w-1/2 my-0 md:my-3">
              <label className="label">
                <span className="label-text font-semibold text-[#4a4c4b] text-base">
                  Status
                </span>
              </label>
              <input
                type="text"
                defaultValue={"pending"}
                {...register("status", { required: true })}
                placeholder="Status feild value is pending"
                className="input input-bordered w-full"
              />
            </div>
            <div className="text-center my-5 pb-5">
              <input
                className="btn bg-[#2046e0] hover:bg-[#062d50] text-white"
                type="submit"
                value="Add a Class"
              />
            </div>
          </form>
        </div>
      </Zoom>
    </div>
  );
};

export default AddClass;
