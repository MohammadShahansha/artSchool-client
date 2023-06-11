import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const Manageclass = () => {
    const [managclass, setManageclass] = useState([]);
    const [loading, setLoading] = useState(true)
    const {user} = useContext(AuthContext)

    useEffect(() => {
        fetch('http://localhost:5000/addedclass')
            .then(res => res.json())
            .then(data => {
                setManageclass(data);
                setLoading(false)
            })
    }, [])
    // console.log(managclass)
    const handelAprovedClass = item => {
        const {email, image, instructorName, name, price, seats} = item;
        if(user && user.email){
            // console.log(classe)
            const savedItem = {image, instructorName, name, price, seats, email, students: 0}
            fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire('Successfully Added in Classes Page')
                }
            })
        }
    }
    return (
        <div>
            <h2 className='text-5xl text-center font-semibold my-5'>Manage Class</h2>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    managclass.map(item => <div key={item._id}>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={item.image} alt="Art image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>Instructor: {item.instructorName}</p>
                                <p>Email:{item.email}</p>
                                <p>Seats:{item.seats}</p>
                                <p>Price:${item.price}</p>
                                <p>Status:{item.status}</p>
                                <div className='flex justify-center gap-3'>
                                    <button onClick={()=> handelAprovedClass(item)}  className='btn btn-primary btn-sm'>Approved</button>
                                    <button className='btn btn-primary btn-sm'>Deny</button>
                                    <button className='btn btn-primary btn-sm'>Feedback</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Manageclass;