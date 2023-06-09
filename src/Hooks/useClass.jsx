import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Provider/AuthProvider';

const useClass = () => {
    const {user} = useContext(AuthContext)


    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes`)
            return res.json();
        },
      })


    return [classes, refetch]
};

export default useClass;