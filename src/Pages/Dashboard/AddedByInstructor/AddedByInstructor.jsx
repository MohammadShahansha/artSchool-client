import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import UpdateModal from "../../../Components/UpdateModal";
import { Link } from "react-router-dom";

const AddedByInstructor = () => {
  const [getClass, setGetClass] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState(null);

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
    <div>
      <h2 className="text-5xl text-center font-semibold my-5">My Classes</h2>
      <div className="grid md:grid-cols-2 gap-5">
        {getClass.map((item) => (
          <div key={item._id}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <Zoom delay={1000} duration={1000} direction="up">
                  <img
                    className="md:h-[300px]"
                    src={item.image}
                    alt="Art image"
                  />
                </Zoom>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <Fade cascade damping={0.1}>
                  {" "}
                  <p>Instructor: {item.instructorName}</p>
                  <p>Price:${item.price}</p>
                  <p>Status:{item.status}</p>
                  {/* <p>Feedbace:{item?.feadback}</p> */}
                  if(item.feadback){<p>Feedback: {item.feadback}</p>}
                  <div className="text-end">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleUpdateClick(item)}
                    >
                      Update
                    </button>

                    {/* <Link to="/dashboard/update" state={item}>
                      <button className="btn btn-primary btn-md">Update</button>
                    </Link> */}
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedClass && <UpdateModal classData={selectedClass} />}
    </div>
  );
};

export default AddedByInstructor;
