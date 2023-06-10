import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handelMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin now!!`,
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })
    }

    return (
        <div className='w-full'>
            <h2 className='text-3xl font-semibold my-7'>Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin'? 'admin' : <>
                                        {
                                            user.role === 'instructor' ? 'instructor' : 'student'
                                        }
                                        </>
                                    }
                                </td>
                                <td>
                                    <button className='btn btn-primary btn-sm text-white'>Make Instructor</button>
                                </td>
                                <td>
                                <button onClick={()=> handelMakeAdmin(user)} className='btn btn-primary btn-sm text-white'>Make Admin</button>
                                </td>
                            </tr>)
                        }
                        
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;