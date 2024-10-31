// AboutMeForm.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AboutMeForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    // fetch(`https://assignment-twelve-server-zeta.vercel.app/updateClass/${classData._id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       // Log an error if the server response is not OK
    //       throw new Error(`Server Error: ${res.status}`);
    //     }
    //     return res.json();
    //   })
    //   .then((result) => {
    //     console.log("Update result:", result);
    //     reset();
    //     Swal.fire("Successfully Selected");
    //     document.getElementById("my_modal_5").close();
    //     triggerReload();
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        About Me
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div>
              <label className="block text-lg font-medium">About Me</label>
              <textarea
                {...register("aboutMe", {
                  required: "Description is required",
                  maxLength: 500,
                })}
                className="textarea textarea-bordered w-full"
                rows="4"
                placeholder="Write something about yourself..."
              ></textarea>
              {errors.aboutMe && (
                <p className="text-red-500">{errors.aboutMe.message}</p>
              )}
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => document.getElementById("my_modal_5").close()}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default AboutMeForm;
