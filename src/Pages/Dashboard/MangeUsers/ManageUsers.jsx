import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import Swal from 'sweetalert2';
const ManageUsers = () => {
    // const [disabled, setDisabled] = useState(false)
    // const [disable, setDisable] = useState(false)
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    console.log(users)

    const handelMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch();
                // setDisabled(true)
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
    const handelMakeInstructor = user => {
        const {image, email, name} = user;
        fetch(`http://localhost:5000/users/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                // setDisable(true)
                refetch();
                console.log(data)
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an instructor now and added in instructor page!!`,
                    showConfirmButton: false,
                    timer: 1500
                  })

            }
        })
        const savedItem = {instructorImage: image, email, instructor: name, students: 0}
        fetch('http://localhost:5000/instructor', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(savedItem)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <div className='w-full'>
            <h2 className='text-3xl font-semibold my-7'>Total Users: {users.length}</h2>
            <div className="overflow-x-auto">
            <Zoom delay={1000} duration={1000}>  <table className="table">
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
                              <td>{index + 1}</td> 
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
                                    <button disabled={user.role==='instructor'} onClick={()=> handelMakeInstructor(user)} className='btn btn-primary btn-sm text-white'>Make Instructor</button>
                                </td>
                                <td>
                                <button disabled={user.role === 'admin'} onClick={()=> handelMakeAdmin(user)} className='btn btn-primary btn-sm text-white'>Make Admin</button>
                                </td>
                                
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table></Zoom> 
            </div>
        </div>
    );
};

export default ManageUsers;