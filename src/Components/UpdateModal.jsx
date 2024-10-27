import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import { Zoom } from "react-awesome-reveal";

const UpdateClass = ({ classData }) => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Update the form values when classData changes
  useEffect(() => {
    if (classData) {
      reset({
        name: classData?.name,
        instructorName: user?.displayName,
        email: user?.email,
        image: classData?.image,
        seats: classData?.seats,
        price: classData?.price,
        status: classData?.status || "pending",
      });
    }
  }, [classData, reset, user]);
  console.log(classData);
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);

    // fetch(`http://localhost:5000/updateClass/${classData._id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     if (result.modifiedCount > 0) {
    //       console.log("Class updated successfully:", result);
    //       document.getElementById("my_modal_5").close();
    //     }
    //   });

    fetch(`http://localhost:5000/updateClass/${classData._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          // Log an error if the server response is not OK
          throw new Error(`Server Error: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("Update result:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={classData?.name}
                  {...register("name", { required: true })}
                  placeholder="Class Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Class Image</span>
                </label>
                {/* <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " /> */}

                <input
                  type="text"
                  defaultValue={classData?.image}
                  {...register("image", { required: true })}
                  placeholder="image"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  {...register("instructorName", { required: true })}
                  placeholder="Instructor Name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                  placeholder="Instructor email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="number"
                  defaultValue={classData?.seats}
                  {...register("seats", { required: true })}
                  placeholder="Available Seats"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  defaultValue={classData?.name}
                  {...register("price", { required: true })}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Status</span>
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
                className="btn btn-primary text-center"
                type="submit"
                value="Update Class"
              />
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateClass;
