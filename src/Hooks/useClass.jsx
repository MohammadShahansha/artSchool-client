import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Provider/AuthProvider";

const useClass = () => {
  const { user } = useContext(AuthContext);
  // const token = localStorage.getItem('access-token')

  const { refetch, data: selectedClass = [] } = useQuery({
    queryKey: ["selectedClass", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://assignment-twelve-server-zeta.vercel.app/selectedclass?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [selectedClass, refetch];
};

export default useClass;
