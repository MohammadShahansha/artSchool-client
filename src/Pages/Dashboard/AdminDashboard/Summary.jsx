import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const Summary = () => {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(
      "https://assignment-twelve-server-zeta.vercel.app/users"
    );
    return res.json();
  });
  // console.log(users);
  let instructors = 0;
  let admin = 0;
  let students = 0;
  if (users) {
    users.map((user, index) => {
      if (user.role === "admin") {
        admin += 1;
      } else if (user.role === "instructor") {
        instructors += 1;
      } else {
        students += 1;
      }
    });
  }

  // console.log(admin);
  // console.log(instructors);
  // console.log(students);

  useEffect(() => {
    fetch("https://assignment-twelve-server-zeta.vercel.app/allclasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        setLoading(false);
      });
  }, []);
  // console.log(classes);

  return (
    <div className=" md:flex gap-5">
      <div className="mx-auto bg-[#f4f6f8] border-2 border-[#e4eaf0] rounded-2xl h-[150px] w-[250px] flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-semibold pb-3 text-[#4a4c4b] text-center">
            Total Instructor
          </h2>
          <h2 className="text-2xl font-semibold   pb-3 text-[#4a4c4b] text-center ">
            {instructors}
          </h2>
        </div>
      </div>
      <div className=" mx-auto bg-[#f4f6f8] border-2 border-[#e4eaf0] rounded-2xl my-5 md:my-0 h-[150px] w-[250px] flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-semibold pb-3 text-[#4a4c4b] text-center">
            Total Student
          </h2>
          <h2 className="text-2xl font-semibold   pb-3 text-[#4a4c4b] text-center ">
            {students}
          </h2>
        </div>
      </div>
      <div className="mx-auto bg-[#f4f6f8] border-2 border-[#e4eaf0] rounded-2xl h-[150px] w-[250px] flex items-center justify-center">
        <div>
          <h2 className="text-2xl font-semibold   pb-3 text-[#4a4c4b] text-center">
            Total Course
          </h2>
          <h2 className="text-2xl font-semibold pb-3 text-[#4a4c4b] text-center ">
            {classes.length}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Summary;
