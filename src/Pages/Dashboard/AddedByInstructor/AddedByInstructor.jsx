import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import UpdateModal from "../../../Components/UpdateModal";
import { Link } from "react-router-dom";

const AddedByInstructor = () => {
  const [getClass, setGetClass] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState(null);
  const [reload, setReload] = useState(false);

  // Function to toggle reload state
  const triggerReload = () => setReload((prev) => !prev);

  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/addedclass")
      .then((res) => res.json())
      .then((data) => {
        setGetClass(data);
        setLoading(false);
      });
  }, []);
  //   console.log(getClass);

  const handleUpdateClick = (item) => {
    setSelectedClass(item); // Set the selected class when clicked
    document.getElementById("my_modal_5").showModal(); // Open the modal
  };

  return (
    <div className="px-5">
      <h2 className="text-3xl md:text-4xl text-center font-semibold my-5">
        All Classes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {getClass.map((item) => (
          <div key={item._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <Zoom delay={1000} duration={1000} direction="up">
                  <img
                    className="h-[250px] w-full"
                    src={item.image}
                    alt="Art image"
                  />
                </Zoom>
              </figure>
              <div className="flex justify-between p-3">
                <div>
                  <h2 className="card-title">{item.name}</h2>
                  <Fade cascade damping={0.1}>
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold">Instructor:</h2>
                      <p>{item.instructorName}</p>
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
                  <button
                    className="btn bg-[#2046e0] hover:bg-[#062d50] text-white"
                    onClick={() => handleUpdateClick(item)}
                  >
                    Update
                  </button>

                  {/* <Link to="/dashboard/update" state={item}>
                      <button className="btn btn-primary btn-md">Update</button>
                    </Link> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedClass && (
        <UpdateModal classData={selectedClass} triggerReload={triggerReload} />
      )}
    </div>
  );
};

export default AddedByInstructor;
