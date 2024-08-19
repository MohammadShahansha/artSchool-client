import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
  const { user } = useContext(AuthContext);

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-twelve-server-zeta.vercel.app/users/instructor/${user?.email}`
      );
      // return res.data.admin;
      const data = await res.json();
      console.log(data);
      return data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
