import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';

const useClass = () => {
    const {user} = useContext(AuthContext)


    const { refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectedclass?email=${user?.email}`)
            return res.json();
        },
      })


    return [selectedClass, refetch]
};

export default useClass;